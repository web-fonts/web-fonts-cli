var fs = require('fs-extra');
var helper = require('../util/helper');
var path = require('path');
var _ = require('lodash');
var options = require('../util/options');
var cwd = process.cwd();

/**
 * Create font files.
 */
module.exports.create = function() {

    fs.readdir(path.join(cwd, 'fonts'), function(error, fonts) {

        // return false, if error occurred
        if(error) { helper.error(error); return; }

        var extensions = [];

        _.each(fonts, function(item) {

            var name = helper.slug(options.get('name')+'-webfont') + path.extname(item);

            extensions.push(path.extname(item));

            fs.renameSync(
                path.join(cwd, 'fonts', item),
                path.join(cwd, 'fonts', name)
            );

        });

        helper.message("[Web Fonts: "+extensions.join(', ')+"] created.");

    });

};