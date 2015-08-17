var fs = require('fs-extra');
var helper = require('../util/helper.js');
var path = require('path');
var options = require('../util/options.js');

module.exports.create = function() {

    var data = helper.template('bower.json', {
        "name" : options.get('name'),
        "family" : options.get('name'),
        "version" : options.get('version')
    });

    fs.writeFile(path.join(process.cwd(), 'bower.json'), data, function(error) {
        if(error) {
            helper.error(error);
            return false;
        }

        helper.message("[bower.json] created.");
    });

};