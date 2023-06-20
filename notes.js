const express = require('express');
const fs = require("fs");
const db = require('./db/db.json');


const app = express();

app.get('/api/notes', (req, res) => {
  res.json(db);
});

app.post('/api/notes', (req, res) => {
  const id = db.length + 1;
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: id,
    };
    db.push(newNote);
    fs.writeFileSync("db/db.json",JSON.stringify(db));
    res.json(db);
});
app.delete('/api/notes/:id', (req, res) => {
  var id = parseInt(req.params.id);

  for (var i = 0; i < db.length; i++) {
    if (db[i].id === id) {
      db.splice(i, 1);
    }
  }
  console.log(db);

  fs.writeFile('./db/db.json', JSON.stringify(db));
});

  
  module.exports = app; 