var fs = require('fs-extra');
var helper = require('../util/helper');
var path = require('path');
var options = require('../util/options');
var cwd = process.cwd();

/**
 * Create bower.json
 */
module.exports.create = function() {

    // declare file and data variables
    var file = path.join(cwd, 'bower.json');
    var data = helper.template('bower.json');

    // write bower.json file
    fs.writeFile(file, data, function(error) {

        // return false, if error occurred
        if(error) { helper.error(error); return; }

        helper.message("[bower.json] created.");
    });

};