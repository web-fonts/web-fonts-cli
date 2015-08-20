var fs = require('fs-extra');
var _ = require('lodash');
var path = require('path');
var config = require('../../config');
var cwd = process.cwd();

// load config.json and extend it to default
if(fs.existsSync(path.join(cwd, 'config.json'))) {
    config = _.extend(config, require(path.join(cwd, 'config.json')));
}

module.exports.get = function(key) {
    return config[key];
};

module.exports.set = function(key, value) {
    return config[key] = value;
};