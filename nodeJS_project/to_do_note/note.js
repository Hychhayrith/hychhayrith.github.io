const fs = require("fs");

var fetch = () => {
    try{
        var noteString = fs.readFileSync('notes.json');
        return JSON.parse(noteString);
    }catch (e){
        return [];
    }
}

var saveNote = (notes) => {
    fs.writeFileSync('notes.json',  JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetch();
    var note = {
        title,
        body
    };


    var duplicateNote = notes.filter((note) => note.title === title);

    if(duplicateNote.length === 0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
    
}
var getNote = () => {
    return fetch();
}
var readNote = (title) => {
    let getNote = fetch();
    let checkNote = getNote.filter((note) => note.title === title);
    return checkNote[0];
}
var removeNote = (title) => {
    var getNote = fetch();
    var checkNote = getNote.filter((note) => note.title !== title);
    saveNote(checkNote);

    return checkNote.length !== getNote.length;
}

var returnNote = (note) => {
    console.log("_________");
    console.log(`Your title:  ${note.title}`);
    console.log(`Your body is: ${note.body}`);
}

module.exports = {
    addNote,
    getNote,
    readNote,
    removeNote,
    returnNote
}