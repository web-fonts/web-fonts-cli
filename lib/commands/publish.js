var options = require('../util/options');
var helper = require('../util/helper');
var exec = require('child_process').exec;
var name = helper.slug(options.get('name'));

module.exports = function(manager) {

    // check if bower
    if(manager === 'bower') {
        helper.message('Publishing package on Bower...');
        return publishToBower();
    }

    helper.error('Package manager ' + manager + ' not found.');

};


function publishToBower() {

    var cmd = 'bower register ' + name + ' git://github.com/web-fonts/'+name+'.git';

    return exec(cmd, function(error, data) {

        // return false, if error occurred
        if(error) { helper.error(error); return; }

        console.log(data);

        helper.success('Package published on Bower.');
    })
}