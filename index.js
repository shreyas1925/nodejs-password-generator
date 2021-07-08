#!/usr/bin/env node
const program = require("commander");
const createPassword = require("./utils/createPassword");
const clipboardy = require("clipboardy");
const chalk = require("chalk");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Node Password Generator");

// <number> is given to take our number like length=10 such , if it was a boolean then no need of it and program.opts() will be
//  displaying our lengtn <object data="" type=""></object>
program
  .option("-l , --length <number>", "Length of the password", "8")
  .option("-s, --save ", " Save password to nodepassword.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Getting our generated password
const generatedPassword = createPassword(length, numbers, symbols);

console.log(generatedPassword);

// Save to file
if (save) {
  savePassword(generatedPassword);
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
console.log(
  chalk.blue("Generated Password : ") + chalk.bold(generatedPassword)
);
console.log(chalk.yellow("Password copied to clipboard"));

// console.log(program.opts()); It just returns our object
