var options = require('../util/options');
var helper = require('../util/helper');
var _ = require('lodash');
var child_process = require('child_process');
var name = helper.slug(options.get('name'));

module.exports = function(manager) {

    // check if bower
    if(manager === 'bower') {
        helper.message('Publishing package on Bower...');
        return publishToBower();
    }

    // check if git
    if(manager === 'git') {
        helper.message('Publishing package to Git...');
        return publishToGit();
    }

    // check if npm
    if(manager === 'npm') {
        helper.message('Publishing package to NPM...');
        return publishToNpm();
    }

    helper.error('Package manager ' + manager + ' not found.');

};


function publishToNpm() {
    var cmd = 'npm publish';
    return child_process.exec(cmd, function(error, data) {

        // return false, if error occurred
        if(error) { helper.error(error); return; }

        console.log(data);

        helper.success('Package published on NPM.');
    })
}

function publishToBower() {

    var cmd = 'bower register ' + name + ' git://github.com/web-fonts/'+name+'.git';

    return child_process.exec(cmd, function(error, data) {

        // return false, if error occurred
        if(error) { helper.error(error); return; }

        console.log(data);

        helper.success('Package published on Bower.');
    })
}


function publishToGit() {

    var commands = [
        'git add .',
        'git commit -m "'+options.get('version')+'"',
        'git tag ' + options.get('version'),
        'git push -u origin master --tags'
    ];

    _.each(commands, function(cmd) {

        try {
            child_process.execSync(cmd);
        } catch(e) {
            helper.error(e.message);
        }

    });

    helper.success('Package published on Git.');
}