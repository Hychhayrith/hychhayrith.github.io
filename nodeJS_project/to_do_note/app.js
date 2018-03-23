const fs = require('fs');
const os = require('os');
const note = require('./note.js');
const _= require("lodash");
const yargs = require("yargs");
const addTitle = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const addBody = {
    describe: 'Body of a note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command("add", 'Add a note please', {title: addTitle, body: addBody})
    .command("list", "Print note (s)")
    .command("read", "Read note", {title: addTitle})
    .command("remove", "Remove note", {title: addTitle})
    .help()
    .argv;
var user = os.userInfo();
// console.log(user);
// fs.appendFileSync("greeting.txt", `\nHello ${user.username}! You are ${note.age}`);
// var newNote = note.addNote();
// console.log(newNote);
// console.log(`The result of addition is: ${note.add(2, 4)}`);
// console.log(_.isString(true));
// console.log(_.uniq([1,2,1,2,1,2,"Chhayrith", "chhay"]));
// console.log(process);
var cmd = argv._[0];
// console.log(process.argv);
// console.log(argv);
if(cmd === "add"){
    var addNote = note.addNote(argv.title, argv.body);
    console.log("Note added");
    note.returnNote(addNote);
}else if(cmd === 'list'){
    var showNotes = note.getNote();
    console.log(`Printing: ${showNotes.length}`);
    showNotes.forEach((note) => {
        console.log("_________");
        console.log(`Your title:  ${note.title}`);
        console.log(`Your body is: ${note.body}`);
        // note.returnNote(showNotes);
    });
}else if(cmd === "read"){
    var addNotes = note.readNote(argv.title);
    if(addNotes){
        console.log("Note Found");
        note.returnNote(addNotes);
    }else{
        console.log("Note not found");
    }
    
}else if(cmd === 'remove'){
    var notes = note.removeNote(argv.title);
    var removeNote = notes ? "Note is sucessfully remove" : "title not found";
    console.log(removeNote);
}else{
    console.log("Command recognized");
}