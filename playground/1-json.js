import fs from 'fs';
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// Challenge: Work with JSON and file system
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
user.name = 'Virti';
user.age = 21;
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
// console.log(data);