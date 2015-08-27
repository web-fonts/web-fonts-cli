var fs = require('fs-extra');
var _ = require('lodash');
var config = require('../../font');
var helper = require('../util/helper');
var path = require('path');
var cwd = process.cwd();

module.exports = function(name, author, version, forced) {

    // declare variables
    var fontsDir = path.join(cwd, 'fonts');
    var configFile = path.join(cwd, 'font.json');

    // remove config file, if has --force flag
    if(forced) {
        fs.removeSync(configFile);
    }

    // extend config object
    var configData = _.clone(config, true);

    // override name, if passed by argument
    if(_.isString(name)) {
        configData['name'] = name;
    }

    // override name, if passed by argument
    if(_.isString(author)) {
        configData['author'] = author;
    }

    // override version, if passed by argument
    if(!_.isUndefined(version)) {
        configData['version'] = version;
    }

    // make sure that /fonts dir exists
    fs.ensureDir(fontsDir, function(error) {

        // return false, if error occurred
        if(error) { helper.error(error); }

    });

    // check if config file exists
    fs.exists(configFile, function(exists) {

        if(!exists) {

            // if does not exists, create one
            fs.writeJSON(configFile, configData, function(error) {

                // return false, if error occurred
                if(error) { helper.error(error); return; }

                helper.success('Initialized.');
            });


        } else {
            // display message, if already initialized
            helper.message('Already initialized. Please use the -f flag to override configuration.');
        }


    });

};
