var fs = require('fs-extra');
var helper = require('../util/helper.js');
var path = require('path');
var _ = require('lodash');
var CleanCSS = require('clean-css');
var options = require('../util/options');
var cwd = process.cwd();

/***
 * CSS create method.
 * @param file
 */
module.exports.create = function(file) {

    // if file is string, convert it to array
    if(_.isString(file)) {
        file = [file];
    }

    // loop through each .css file
    _.each(file, function(file) {

        var data = helper.template(file);

        file = path.join(cwd, 'css', file.replace('font-name', helper.slug(options.get('name'))));

        // create css file
        fs.outputFile(file, data, function(error) {

            // return false, if error occurred
            if(error) { helper.error(error); return; }

            // minify css file
            minify(file, data);

            helper.message("["+path.basename(file)+"] created.");
        });

    });

};

/**
 * CSS Minify method.
 * @param file
 * @param data
 */
function minify(file, data) {

    // declare file and data variables
    data = new CleanCSS().minify(data).styles;
    file = path.basename(file);
    file = path.join(cwd, 'css', file.replace('.css', '.min.css'));

    fs.outputFile(file, data, function(error) {

        // return false, if error occurred
        if(error) { helper.error(error); return; }

        helper.message("["+path.basename(file)+"] minified.");
    });
}