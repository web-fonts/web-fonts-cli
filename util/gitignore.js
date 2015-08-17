var fs = require('fs-extra');
var helper = require('../util/helper.js');
var path = require('path');

module.exports.create = function() {
    fs.writeFile(path.join(process.cwd(), '.gitignore'), helper.template('gitignore'), function(error) {
        if(error) {
            helper.error(error);
            return false;
        }
        helper.message("[.gitignore] created.");
    });
};