var fs = require('fs-extra');
var _ = require('lodash');
var path = require('path');
var config = require('../../font');
var cwd = process.cwd();

var options = _.clone(config, true);

// load config and extend it to default
if(fs.existsSync(path.join(cwd, 'font.json'))) {
    options = _.extend(options, require(path.join(cwd, 'font.json')));
}

module.exports.get = function(key) {
    return options[key];
};

module.exports.set = function(key, value) {
    return options[key] = value;
};