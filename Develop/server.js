const express = require('express');
const routes = require('./routes/index')
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log(`Server listening on http://localhost:${PORT}`);
 });