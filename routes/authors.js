const express = require('express');
const router = express.Router();
const Author = require('../models/author')

// All authors
router.get('/', async (req, res) => {
    const searchOptions = {};
    if(req.query.name!=null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i');
    }
    try{
        const authors = await Author.find(searchOptions);
        res.render('authors/index', {
            authors: authors,
            searchOptions:req.query.name,
        });

    }catch(err){
        res.redirect('/');
    }
})

// new Author
router.get('/new',(req, res) => {
    res.render('authors/new',{author:new Author()})
})

// create new Author
router.post('/', async (req, res) => {
    const newAuthor = new Author({
        name: req.body.name,
    })
    try{
        const author = await newAuthor.save();
        console.log(author);
        //  res.redirect(`/authors/${author._id}`);
         res.redirect('/authors')
    }catch(e){
         res.render('authors/new',{
         author:newAuthor,
         errorMessage:'Error creating Author',
         })
    }
  
})

                    
     



         






module.exports = router;    