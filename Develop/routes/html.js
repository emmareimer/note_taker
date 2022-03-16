const router = require('express').Router();
const path = require('path');

//End point for /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
}); 


// Wildcard endpoint
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); 

module.exports = router;