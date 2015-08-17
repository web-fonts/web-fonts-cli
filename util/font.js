var fs = require('fs-extra');
var helper = require('../util/helper.js');
var path = require('path');
var _ = require('lodash');
var options = require('../util/options.js');

module.exports.create = function() {

    fs.readdir(path.join(process.cwd(), 'src'), function(error, fonts) {

        if(error) {
            helper.error(error);
            return false;
        }

        _.each(fonts, function(item) {
            var name = helper.slug(options.get('name')+'-webfont') + path.extname(item);

            fs.copySync(
                path.join(process.cwd(), 'src', item),
                path.join(process.cwd(), 'dist', 'fonts', name)
            );

        });

        helper.message("[Web Fonts: ttf, woff, woff2, eot, svg] created.");

    });

};