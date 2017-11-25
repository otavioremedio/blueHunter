
/*
 * GET books listing.
 */
 var mongoose = require('mongoose');
 var book = require('../models/Book');

exports.list_by_title = function(req, res){  
  book.find({'title': new RegExp(req.query.value, 'i')}, function(err, books){
    if(err){
      console.log(err);
    } else {
      res.send(books);
    }
  });
};

exports.list_by_author = function(req, res){
  book.find({'author': new RegExp(req.query.value, 'i')}, function(err, books){
    if(err){
      console.log(err);
    } else {
      res.send(books);
    }
  });
};
