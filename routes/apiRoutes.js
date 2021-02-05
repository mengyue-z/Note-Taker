const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
// ROUTING

module.exports = (app) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  app.get('/api/notes', (req, res) => {
    return res.json(notes);
  });

  app.post("/api/notes", (req, res) => {
        var newNote = req.body;
       // var noteListLength = notes.length;
    
        newNote.id = uniqid();
        notes.push(newNote);
    
        //write to db.json file to add updated notes
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
        res.json(notes);

        
    });
   
  app.delete("/api/notes/:id", (req, res) => {
      var noteId = req.params.id;
    
      notes = notes.filter(noteSelected =>{
          return noteSelected.id != noteId;
      });

      fs.writeFileSync("./db/db.json", JSON.stringify(notes));
      res.json(notes);
  });

}
