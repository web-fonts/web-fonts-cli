var program = require('commander');
var init = require('./commands/init');
var clean = require('./commands/clean');
var create = require('./commands/create');
var publish = require('./commands/publish');
var pkg = require('../package');

module.exports.run = function() {

    // web fonts program
    program
        .version(pkg.version)
        .option('-f, --force', 'force to remove created files first');

    // init command
    program
        .command('init')
        .arguments('[name] [author] [version]')
        .description('create config file and /fonts dir')
        .action(function(name, author, version) {
            init(name, author, version, program.force);
        });

    // clean command
    program
        .command('clean')
        .description('remove created files')
        .action(function() {
            clean();
        });

    // create command
    program
        .command('create')
        .description('create font files')
        .action(function() {

            // clean first, if --force flag
            if(program.force) {
                clean();
            }

            create();
        });

    // publish command
    program
        .command('publish')
        .arguments('[manager]')
        .description('publish package to package manager [manager=bower|git|npm]')
        .action(function(manager) {

            // check if package manager is provided
            if(!manager) {
                return program.outputHelp();
            }

            publish(manager);
        });

    // parse passed arguments
    program.parse(process.argv);


    // if no arguments passed, display help message
    if(!process.argv.slice(2).length) {
        program.outputHelp();
    }
};

