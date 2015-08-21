var fs = require('fs-extra');
var _ = require('lodash');
var path = require('path');
var config = require('../../config');
var cwd = process.cwd();

var options = _.clone(config, true);

// load config.json and extend it to default
if(fs.existsSync(path.join(cwd, 'config.json'))) {
    options = _.extend(options, require(path.join(cwd, 'config.json')));
}

module.exports.get = function(key) {
    return options[key];
};

module.exports.set = function(key, value) {
    return options[key] = value;
};