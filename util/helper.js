var fs = require('fs');
var path = require('path');
var colors = require('colors/safe');
var Handlebars = require('handlebars');
var _ = require('lodash');

Handlebars.registerHelper('slug', function() {
    return slug(this.name);
});


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

module.exports.template = function(file, data) {

    data = _.extend({}, data);

    if(fs.existsSync(path.join(process.cwd(), 'template/'+file+'.hbs'))) {
        file = path.join(process.cwd(), 'template/'+file+'.hbs');
    } else {
        file = path.join(__dirname, '..', 'template/'+file+'.hbs');
    }

    file = new Buffer(fs.readFileSync(file)).toString();
    var template = Handlebars.compile(file);
    return template(data);

};