const express = require('express');
const router = express.Router();
const book=require('../models/book_model');

router.get('/',function(request,response){
    book.getAllBooks(function(result){
        response.json(result);
    })
});

router.get('/:id',function(request, response){
    book.getOneBook(request.params.id,function(result){
        response.json(result);
    })
});

router.post('/',function(request,response){
    book.addBook(request.body,function(result){
        response.json(result);
    });
});

router.put('/:id',function(request, response){
    response.json("Päivitetään kirja jonka id="+request.params.id);
});

router.delete('/:id',function(request,response){
    response.json("Poistetaan kirja, jonka id="+request.params.id);
});

module.exports=router