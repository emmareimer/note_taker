const express = require('express');
const path = require('path');
const app = express();

//End point for /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
}); 

//Wildcard endpoint
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); 

module.exports = app;