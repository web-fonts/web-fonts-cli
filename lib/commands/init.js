var fs = require('fs-extra');
var _ = require('lodash');
var config = require('../../font');
var helper = require('../util/helper');
var path = require('path');
var cwd = process.cwd();
var program = require('commander');
var child_process = require('child_process');

module.exports = function() {


    if(program.git && program.name) {

        var slug = helper.slug(program.name);

        // curl data to sent on github api
        var curlData = {
            name: slug,
            description: program.name + ' Web Font Package'
        };

        // curl command to create github repo
        var cmdToCall = "curl -u '"+program.username+"' https://api.github.com/orgs/web-fonts/repos -d '"+JSON.stringify(curlData)+"'";

        helper.message('Copy the command below and run in Terminal:');
        helper.message(cmdToCall);

        var commands = [
            'git init',
            'git remote add origin https://github.com/web-fonts/'+slug+'.git'
        ];

        _.each(commands, function(cmd) {

            try {
                child_process.execSync(cmd);
            } catch(e) {
                helper.error(e.message);
            }

        });

    }

    // declare variables
    var fontsDir = path.join(cwd, 'fonts');
    var configFile = path.join(cwd, 'font.json');

    // remove config file, if has --force flag
    if(program.force) {
        fs.removeSync(configFile);
    }

    // extend config object
    var configData = _.clone(config, true);

    // override name, if passed by argument
    configData['name'] = program.name;

    // override name, if passed by argument
    configData['author'] = program.author;

    // override version, if passed by argument
    configData['version'] = program.release;

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
            helper.error('Already initialized. Please use the `-f` flag at the end of the command.');
        }


    });

};
