// var personName = {
//     name : "Hy Chhayriht",
//     age : 18
// };
// var personInfo = JSON.stringify(personName);
// console.log(personInfo);
// console.log(typeof personInfo);
// var personDetail = JSON.parse(personInfo);
// console.log(personDetail);
// console.log(typeof personDetail);

const fs = require("fs");
const yargs = require("yargs");
var argv = yargs.argv;
var cmd = process.argv[2];
// var title = "";
// var body = "";
// var addNote = (title, body) => {
//     title: title;
//     console.log(title);
//     body: body;
// }
var addOriginalNote = {
    // addNote : (title, body) => {
    //     title,
    //     body
    // }
    title: "KIT",
    name: "chhayrith"
    
}
// console.log("title" + addNote.title);


// if(cmd === 'add'){
//     addOriginalNote.addNote(argv.title, argv.body);
// }else{
//     console.log("Entered wrong command");
// }

var originalNote = JSON.stringify(addOriginalNote);
fs.writeFileSync('notes.json', originalNote);

var noteString = fs.readFileSync('notes.json')
var noteConverted = JSON.parse(noteString);
console.log(typeof noteConverted);
console.log(noteConverted);
console.log(argv);

