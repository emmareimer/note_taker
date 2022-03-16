// Set up express routes (see html routes)
const router = require('express').Router();
const path = require('path');
const uniqid = require('uniqid'); 
// const { builtinModules } = require('module');

// Import json file
const jsonFile = require('../db/db.json')

// Import fs module to write or update to the file (post/delete)
const fs = require('fs');


// Add get /api/notes route to read db.json file 
//send db.json data
router.get('/notes-data', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
        if (err) console.log(err);
        return res.json(JSON.parse(data));
});
});

router.post('/notes-data', (req, res) => {
console.log('here');
if (req.body) {
    const { title, text} = req.body;
    const newNote = {
        title,
        text,
        id: uniqid(),
    };
    fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
        console.log(data)
        let newData = JSON.parse(data)
        console.log('new data', newData)

        newData.push(newNote)

        let changedData = JSON.stringify(newData)

        fs.writeFile(path.resolve(__dirname, '..', 'db/db.json'), changedData, (err) => {
            console.log(err)
            return res.json();
        })      
    })
}
});



        // Give each note a unique id  (look into npm packages that could do this for you)
        //readFile, store the returned data into a temporary array, THEN push newObj to it
        //and it's the temporary array that will be appended into db.json
        //push data in to db.json array/req.body ????
        //push the data in to the array as an object and have it create a unique id name


//Add app.get to get data from db.json to put back on client side page????


// Add delete /api/notes/:id route  -- remove note from file, save updated json file
// Delete by index(id) - > writeFile


// Export(s) file
module.exports = router;