import chalk from "chalk";
import { addNotes, removeNotes, listNotes, readNote } from "./notes.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// const command = process.argv[2];
// console.log(process.argv);

// Customizing yargs version
const y = yargs(hideBin(process.argv));
y.version("1.1.0");

//Create yargs command
//Challenge: Add yargs command for list and read
//Challenge: Add body option in add command
//Challenge: Implement remove note functionality
// Challenge: Refactor all functions to ES6 method definition or arrow function
y.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNotes(argv.title, argv.body);
    // console.log(`Title: ${argv.title}\nBody: ${argv.body}`);
  },
})
  .command({
    command: "remove",
    describe: "Remove a note!",
    builder: {
      title: {
        describe: "Title of note",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      removeNotes(argv.title);
      // console.log("Removing a note!");
    },
  }) //Challenge: Wire up List command
  .command({
    command: "list",
    describe: "List all notes!",
    handler() {
      listNotes();
      // console.log("Listing all note!");
    },
  }) //Challenge: Wire up read command
  .command({
    command: "read",
    describe: "Read a note!",
    builder: {
      title: {
        describe: "Title of note",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      readNote(argv.title);
      // console.log("Reading a note!");
    },
  })
  .parse();
// console.log(argv);
// console.log(yargs(process.argv).argv);
