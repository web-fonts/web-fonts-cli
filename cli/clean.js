var fs = require('fs-extra');
var path = require('path');
var colors = require('colors/safe');

module.exports.clean = function() {

    fs.removeSync(path.join(process.cwd(), 'dist'));
    fs.removeSync(path.join(process.cwd(), 'bower.json'));
    fs.removeSync(path.join(process.cwd(), '.gitignore'));
    fs.removeSync(path.join(process.cwd(), 'readme.md'));

    console.log(colors.green("Removed generated files."));
};
