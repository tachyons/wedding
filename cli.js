#!/usr/bin/env node
'use strict';
const program = require('commander');
const opn = require('opn');

console.log("__  __ _  __  _  ____  ____   ____  _   _    __    __ ____  ____   ____      ____   __  _   __   ____   _     _ \r\n\\ \\\/ \/| ||  \\| || ===|| ===| (_ (_`| |_| |   \\ \\\/\\\/ \/| ===|| _) \\ (_ (_`    \/ () \\ |  \\| |__) | \/ () \\ | |__ | |\r\n \\__\/ |_||_|\\__||____||____|.__)__)|_| |_|    \\_\/\\_\/ |____||____\/.__)__)   \/__\/\\__\\|_|\\__|\\___\/\/__\/\\__\\|____||_|")
program
  .version('0.0.1')
  .option('-l, --location', 'Get location')
  .option('-b, --bride', 'Bride details')
  .option('-g, --groom', 'Groom details')
  .option('-d, --date', 'Date of marriage')
  .parse(process.argv);

if(program.location) {
  console.log("Location: Madayi Cooperative Rural Bank Auditorium \n")
  opn("https://www.google.co.in/maps/dir/''/''/data=!4m5!4m4!1m0!1m2!1m1!1s0x3ba414b6d4b9066d:0xab737784febcb1d4?sa=X&ved=0ahUKEwj8qq_sqpTTAhWKqo8KHfxGAAsQ9RcICzAA")
}
if (program.date) {
  console.log("Date: 9th April 2017")
}

if (program.bride) {
  console.log("Anjali")
}

if(program.groom) {
  console.log("Vineesh")
}
