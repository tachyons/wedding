#!/usr/bin/env node --harmony
'use strict';

const program = require('commander');

program
  .version('1.0.0')
  .command('help')
  .description('Vineesh weds anjali')
  .option('-h, --help','Get help message')
  .parse(process.argv); 
if (program.help)  console.log('Available commands  \n help');

