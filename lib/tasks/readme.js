var fs = require('fs-extra');
var helper = require('../util/helper');
var path = require('path');
var cwd = process.cwd();

/**
 * Create README.md.
 */
module.exports.create = function() {

    // declare file and data variables
    var file = path.join(cwd, 'README.md');
    var data = helper.template('README.md');

    // write README.md file
    fs.writeFile(file, data, function(error) {

        // return false, if error occurred
        if(error) { helper.error(error); return; }

        helper.message("[README.md] created.");
    });

};