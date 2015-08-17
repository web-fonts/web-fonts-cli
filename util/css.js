var fs = require('fs-extra');
var helper = require('../util/helper.js');
var path = require('path');
var _ = require('lodash');
var CleanCSS = require('clean-css');
var options = require('../util/options.js');

module.exports.create = function(file) {

    if(_.isString(file)) {
        file = [file];
    }

    _.each(file, function(file) {

        var data = helper.template(file, {
            "name": options.get('name'),
            "font": path.join('..', 'fonts', helper.slug(options.get('name')))
        });

        var outputFile = path.join(process.cwd(), 'dist', 'css', file);

        fs.outputFile(outputFile, data, function(error) {
            if(error) {
                helper.error(error);
                return false;
            }

            minify(file, data);

            helper.message("["+file+"] created.");
        });

    });

};

function minify(file, data) {
    var minified = new CleanCSS().minify(data).styles;
    var outputFile = path.join(process.cwd(), 'dist', 'css', file.replace('.css', '.min.css'));

    fs.outputFile(outputFile, minified, function(error) {
        if(error) {
            helper.error(error);
            return false;
        }

        helper.message("["+file.replace('.css', '.min.css')+"] minified.");
    });
}

module.exports.minify = minify;