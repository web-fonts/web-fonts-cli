var fs = require('fs-extra');
var _ = require('lodash');
var path = require('path');
var config = require('../config.json');

// load config.json and extend it to default
if(fs.existsSync(path.join(process.cwd(), 'config.json'))) {
    config = _.extend(config, require(path.join(process.cwd(), 'config.json')));
}

module.exports.get = function(key) {
    return config[key];
};