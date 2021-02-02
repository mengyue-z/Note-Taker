const fs = require('fs');
const path = require('path');

// ROUTING

module.exports = (app) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  app.get('/api/notes', (req, res) => {
    return res.json(notes);
  });

  // app.post('/api/notes', (req, res) => {
  //     db.push(req.body)
  //     res.json(true);
  // });


};
