var program = require('commander');
var init = require('./commands/init');
var clean = require('./commands/clean');
var create = require('./commands/create');
var publish = require('./commands/publish');
var pkg = require('../package');

module.exports.run = function() {


    // function, that returns the the passed value
    // required in order to use default params to options
    var fn = function(value) { return value; };

    // web fonts program
    program
        .version(pkg.version, null)
        .option('-n, --name [name]', 'Font name. Default: "Font Name"', fn, 'Font Name')
        .option('-a, --author [author]', 'Font author. Default: "Font Author"',  fn, 'Font Author')
        .option('-r, --release [release]', 'Font release. Default: 0.0.1', fn, '0.0.1')
        .option('-f, --force [force]', 'force to remove created files first. Default: false', fn, false);

    // init command
    program
        .command('init')
        .description('create config file and /fonts dir')
        .action(init);

    // clean command
    program
        .command('clean')
        .description('remove created files')
        .action(clean);

    // create command
    program
        .command('create')
        .description('create font files')
        .action(create);

    // publish command
    program
        .command('publish')
        .arguments('[manager]')
        .description('publish package to package manager [manager=bower|git|npm]')
        .action(publish);

    // parse passed arguments
    program.parse(process.argv);


    // if no arguments passed, display help message
    if(!process.argv.slice(2).length) {
        program.outputHelp();
    }
};

