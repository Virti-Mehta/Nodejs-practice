// const fs = require('fs');
// fs.writeFileSync('notes.txt',"This file was created by Node.js!");
//
//Challenge: Append a message to notes.txt

// fs.appendFileSync('notes.txt','\nHello! This is Virti Mehta.');

// const name = require('./utils');
// console.log(name);

// const add = require("./utils");
// const sum = add(2, -4);
// console.log(sum);

//Challenge: Define and use a function(getNotes) in a new file(notes.js)
// const notes = require("./notes");
// const msg = notes.getNotes();
// console.log(msg);

// Challenge: Use the chalk library in your project
// import chalk from 'chalk';
// const log = console.log;
// log(chalk.green('Success!'));
// log(chalk.redBright.bold('I am bold.'));
// log(chalk.yellow.bgBlueBright.inverse('My colors are inversed.'));

console.log(process.argv[2]);

//////////////////////////////////////////
import yargs from "yargs";
// const command = process.argv[2];
console.log(process.argv);

// if (command === 'add'){
//   console.log('Adding note!');
// }
// else if (command === 'remove'){
//   console.log('Removing note!');
// }

// console.log(yargs.argv);

// Customizing yargs version 
const y = yargs();
y.version('1.1.0');

console.log(yargs(process.argv).argv);