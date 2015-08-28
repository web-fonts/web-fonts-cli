var fs = require('fs-extra');
var path = require('path');
var program = require('commander');
var clean = require('../commands/clean');
var helper = require('../util/helper');
var bower = require('../tasks/bower');
var package = require('../tasks/package');
var css = require('../tasks/css');
var font = require('../tasks/font');
var gitignore = require('../tasks/gitignore');
var readme = require('../tasks/readme');

module.exports = function() {

    if(program.force) {
        clean();
    }

    fs.exists(path.join(process.cwd(), 'fonts'), function(exists) {

        if(exists) {

            // create .gitignore file
            gitignore.create();

            // create bower.json file
            bower.create();

            // create package.json file
            package.create();

            // create README.md file
            readme.create();

            // create font files
            font.create();

            // create css files
            css.create(['font-name.css', 'font-name.ie.css', 'font-name.legacy.css']);

        } else {

            helper.error('[fonts] directory and fonts does not exists.');

        }

    });


};

