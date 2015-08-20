var program = require('commander');
var clean = require('./commands/clean');
var create = require('./commands/create');
var pkg = require('../package');

module.exports.run = function() {

    // web fonts program
    program
        .version(pkg.version)
        .option('-f, --force', 'force to remove created files first');

    // command clean
    program
        .command('clean')
        .description("remove created files")
        .action(function() {
            clean();
        });

    // create command
    program
        .command('create')
        .description("create font files")
        .action(function() {

            // clean first, if --force flag
            if(program.force) {
                clean();
            }

            create();
        });

    // parse passed arguments
    program.parse(process.argv);


    // if no arguments passed, display help message
    if(!process.argv.slice(2).length) {
        program.outputHelp();
    }
};

