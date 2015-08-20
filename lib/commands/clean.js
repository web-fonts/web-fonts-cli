var fs = require('fs-extra');
var path = require('path');
var helper = require('../util/helper');
var cwd = process.cwd();

module.exports = function() {

    fs.removeSync(path.join(cwd, 'css'));
    fs.removeSync(path.join(cwd, 'bower.json'));
    fs.removeSync(path.join(cwd, '.gitignore'));
    fs.removeSync(path.join(cwd, 'readme.md'));

    helper.success('Removed generated files.');
};
