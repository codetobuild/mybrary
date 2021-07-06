const express = require('express');
const router = express.Router();

// All authors
router.get('/', (req, res) => {
    res.render('authors/index')
})

// new Author
router.get('/new',(req, res) => {
    res.render('authors/new')
})

// create new Author
router.post('/new', (req, res) => {
    res.send('helllo creating new author')
})













module.exports = router;    