// Set up express routes (see html routes)
const express = require('express');
const path = require('path');
// Import json file
const json = require('./db/db.json')
// Import fs module to write or update to the file (post/delete)
const fs = require('fs');
const { builtinModules } = require('module');

const app = express();


// Add get /api/notes route to read db.json file 
//send db.json data
app.get('/', (req, res) => {
    readFromFile(json).then((data) => res.json(JSON.parse(data)));
});



// Add post /api/notes route to save note to db.json file
// Give each note a unique id  (look into npm packages that could do this for you)
//(writeFile)


// Add delete /api/notes/:id route  -- remove note from file, save updated json file
// Delete by index(id) - > writeFile


// Export(s) file
module.exports = app;