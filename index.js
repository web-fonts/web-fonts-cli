#!/usr/bin/env node

var program = require('commander');
var clean = require('./cli/clean.js');
var generate = require('./cli/generate.js');
var pkg = require('./package.json');

program
    .version(pkg.version);

// command clean
program
    .command('clean')
    .description("remove generated files")
    .action(function() {
        clean.clean();
    });

// create/generate command
program
    .command('generate')
    .alias('create')
    .description("generate font files")
    .action(function() {
        generate.generate();
    });

program.parse(process.argv);
