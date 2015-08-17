var fs = require('fs-extra');
var helper = require('../util/helper.js');
var path = require('path');
var options = require('../util/options.js');

module.exports.create = function() {

    var bowerData = helper.template('bower.json');

    bowerData = bowerData.replace(/{{name}}/g, helper.slug(options.get('name')));
    bowerData = bowerData.replace(/{{family}}/g, options.get('name'));
    bowerData = bowerData.replace(/{{version}}/g, options.get('version'));

    fs.writeFile(path.join(process.cwd(), 'bower.json'), bowerData, function(error) {
        if(error) {
            helper.error(error);
            return false;
        }

        helper.message("[bower.json] created.");
    });

};