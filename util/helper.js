var fs = require('fs');
var path = require('path');
var colors = require('colors/safe');

module.exports.slug = function(name) {
    name = name.replace(/ /g, '-');
    name = name.replace(/_/g, '-');
    name = name.toLowerCase();
    return name;
};


module.exports.success = function(message) {
    console.log(colors.green(message));
};

module.exports.message = function(message) {
    console.log(colors.cyan(message));
};

module.exports.error = function(message) {
    console.log(colors.red(message));
};

module.exports.template = function(template) {
    if(fs.existsSync(path.join(process.cwd(), 'template/'+template+'.txt'))) {
        template = path.join(process.cwd(), 'template/'+template+'.txt');
    } else {
        template = path.join(__dirname, '..', 'template/'+template+'.txt');
    }
    return new Buffer(fs.readFileSync(template)).toString();
};