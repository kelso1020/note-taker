const express = require('express');
const getNotes = require('./index.js');
const postNotes = require('./notes.js');
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(getNotes)
app.use(postNotes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
