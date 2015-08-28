var fs = require('fs');
var path = require('path');
var colors = require('colors/safe');
var Handlebars = require('handlebars');
var _ = require('lodash');
var cwd = process.cwd();
var options = require('./options');

// register handlebars slug method.
Handlebars.registerHelper('slug', function() {
    return slug(this.name);
});

// register handlebars svgFontFix method.
Handlebars.registerHelper('svgFontFix', function() {
    return toSVGName(this.name);
});


// register handlebars font method.
Handlebars.registerHelper('font', function() {
    return '../fonts/' + slug(this.name);
});

// register handlebars year method.
Handlebars.registerHelper('year', function() {
    return new Date().getFullYear();
});

// register handlebars author_badge method.
Handlebars.registerHelper('author_badge', function() {
    var author = this.author;
    author = _.trim(author);
    author = author.split(' ').map(function(item) {
        return _.capitalize(item);
    }).join('_');
    return author;
});

/**
 * Convert name to slug.
 * @param name
 * @return string;
 */
function slug(name) {
    name = name.replace(/ /g, '-');
    name = name.replace(/_/g, '-');
    name = name.toLowerCase();
    name = _.trim(name);
    return name;
}

/**
 * Convert font family name to svg font name.
 * @param name
 * @returns {*}
 */
function toSVGName(name) {

    name = name.replace(/ /g, '_');
    name = name.toLowerCase();
    name = _.trim(name);

    if(name.indexOf('bold') > -1) {
        name = name.replace(/_bold/ig, 'bold');
    }
    else if(name.indexOf('italic') > -1) {
        name = name.replace(/_italic/ig, 'italic');
    }
    else if(name.indexOf('regular') > -1) {
        name = name.replace(/_regular/ig, 'regular');
    } else {
        name = name + 'regular';
    }

    return name;
}

module.exports.slug = slug;
module.exports.toSVGName = toSVGName;

module.exports.success = function(message) {
    console.log(colors.green(message));
};

module.exports.message = function(message) {
    message = '|-----' + message;
    console.log(colors.cyan(message));
};

module.exports.error = function(message) {
    console.log(colors.red(message));
};

/***
 * Template function.
 * @param file
 * @param data
 * @return {*}
 */
module.exports.template = function(file, data) {

    data = _.extend({
        name: options.get('name'),
        version: options.get('version'),
        author: options.get('author')
    }, data);

    // check if predefined template file exists and load it
    if(fs.existsSync(path.join(cwd, 'template/'+file+'.hbs'))) {
        file = path.join(cwd, 'template/'+file+'.hbs');
    } else {
        file = path.join(__dirname, '..', '..', 'template/'+file+'.hbs');
    }

    file = fs.readFileSync(file, 'utf8');

    // use handlebars to compile template
    var template = Handlebars.compile(file);

    return template(data);
};