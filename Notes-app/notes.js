import fs from "fs";
import chalk from "chalk";
// Challenge: Refactor all functions to ES6 method definition or arrow function
export const addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes =notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  debugger

  if(!duplicateNote){
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'));
  }
  else {
    console.log(chalk.red.inverse('Note title taken'));
  }

};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const data = dataBuffer.toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};
export const removeNotes = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if(notes.length > notesToKeep.length){
    console.log(chalk.bgGreen('Note removed!'));  
  }
  else{
    console.log(chalk.bgRed('No note found!'));
  }
  saveNotes(notesToKeep);
  // console.log("Title: "+ title);
}
export const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.yellow("Your notes..."));
  notes.forEach(note => {
    console.log(`Title: ${note.title}`);
  });
}
export const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title); 
  if(note){
    console.log(chalk.italic.inverse(note.title));
    console.log(note.body);
  }
  else{
    console.log(chalk.red.inverse('No note found'));
  }
}
// module.exports = {
//   getNotes,
//   addNotes,
// };
