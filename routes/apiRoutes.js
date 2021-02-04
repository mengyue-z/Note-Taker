// const notes = require('../db/db.json')
// const fs = require("fs");
// const path = require("path");
// // ROUTING

// module.exports = (app) => {

//   // app.get('/api/notes', (req,res) => {
//   //   notes.getNotes().then(notes => res.json(notes))
//   //   .catch((error) => res.status(200).json(error))
//   // });
 
//   // app.post('/api/notes',(req,res)=>{
//   //  notes.newNotes(req.body).then(note => res.json(note))
//   //  .catch((error) => res.status(200).json(error))
//   // });
//   // app.delete('/api/notes/:id',(req,res)=>{
//   //     notes.deleteNotes(req.params.id).then(() => res.json())
//   //     .catch((error) => res.status(200).json(error))
//   //    });
//   app.post("/api/notes", (req, res) => {
//     let newNote = req.body;
//     let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//     let notelength = (noteList.length).toString();

//     //create new property called id based on length and assign it to each json object
//     newNote.id = notelength;
//     //push updated note to the data containing notes history in db.json
//     noteList.push(newNote);

//     //write the updated data to db.json
//     fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
//     res.json(noteList);
// })

// app.delete("/api/notes/:id", (req, res) => {
//   let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//   let noteId = (req.params.id).toString();

//   //filter all notes that does not have matching id and saved them as a new array
//   //the matching array will be deleted
//   noteList = noteList.filter(selected =>{
//       return selected.id != noteId;
//   })

//   //write the updated data to db.json and display the updated note
//   fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
//   res.json(noteList);
// });

// };

const fs = require('fs');
const path = require('path');

// ROUTING

module.exports = (app) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  app.get('/api/notes', (req, res) => {
    return res.json(notes);
  });

  app.post("/api/notes", (req, res) => {
        var newNote = req.body;
        var noteListLength = notes.length
    
        newNote.id = noteListLength;
        notes.push(newNote);
    
        //write to db.json file to add updated notes
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
        res.json(notes);

        
    });
   

  }