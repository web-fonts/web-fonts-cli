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

// register handlebars font method.
Handlebars.registerHelper('font', function() {
    return '../fonts/' + slug(this.name);
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

module.exports.slug = slug;

module.exports.success = function(message) {
    console.log(colors.green(message));
};

module.exports.message = function(message) {
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
        version: options.get('version')
    }, data);

    // check if predefined template file exists and load it
    if(fs.existsSync(path.join(cwd, 'template/'+file+'.hbs'))) {
        file = path.join(cwd, 'template/'+file+'.hbs');
    } else {
        file = path.join(__dirname, '..', '..', 'template/'+file+'.hbs');
    }

    // use buffer to read from template file
    file = new Buffer(fs.readFileSync(file)).toString();

    // use handlebars to compile template
    var template = Handlebars.compile(file);

    return template(data);
};