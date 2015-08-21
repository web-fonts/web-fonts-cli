var fs = require('fs-extra');
var helper = require('../util/helper');
var path = require('path');
var cwd = process.cwd();

/**
 * Create readme.md.
 */
module.exports.create = function() {

    // declare file and data variables
    var file = path.join(cwd, 'readme.md');
    var data = helper.template('readme.md');

    // write readme.md file
    fs.writeFile(file, data, function(error) {

        // return false, if error occurred
        if(error) { helper.error(error); return; }

        helper.message("[readme.md] created.");
    });

};