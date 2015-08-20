var fs = require('fs-extra');
var helper = require('../util/helper');
var path = require('path');
var cwd = process.cwd();

/**
 * Create .gitignore.
 */
module.exports.create = function() {

    // declare file and data variables
    var file = path.join(cwd, '.gitignore');
    var data = helper.template('gitignore');

    // create .gitignore file
    fs.writeFile(file, data, function(error) {

        // return false, if error occurred
        if(error) { helper.error(error); return; }

        helper.message("[.gitignore] created.");
    });
};