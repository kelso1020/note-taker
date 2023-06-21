const express = require('express');
const getNotes = require('./index.js');
const postNotes = require('./notes.js');
const host = '0.0.0.0';
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(getNotes)
app.use(postNotes)

app.listen(PORT, host, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);