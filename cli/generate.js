var bower = require('../util/bower.js');
var css = require('../util/css.js');
var font = require('../util/font.js');
var gitignore = require('../util/gitignore.js');

module.exports.generate = function() {

    // create .gitignore file
    gitignore.create();

    // create bower.json file
    bower.create();

    // create font files
    font.create();

    // create css files
    css.create(['fonts.css', 'fonts.ie.css', 'fonts.legacy.css']);
};

