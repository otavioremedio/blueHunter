
/*
 * GET books listing.
 */
 var mongoose = require('mongoose');
 var book = require('../models/Book');

exports.list_by_title = function(req, res){
  mongoose.connect("mongodb://localhost:27017/bluehunter", function(err,db){
    if(err) console.log(err);
  });
  book.find({'title': new RegExp(req.query.value, 'i')}, function(err, books){
    if(err){
      console.log(err);
    } else {
      mongoose.connection.close();
      res.send(books);
    }
  });
};

exports.list_by_author = function(req, res){
  mongoose.connect("mongodb://localhost:27017/bluehunter", function(err,db){
    if(err) console.log(err);
  });
  book.find({'author': new RegExp(req.query.value, 'i')}, function(err, books){
    if(err){
      console.log(err);
    } else {
      mongoose.connection.close();
      res.send(books);
    }
  });
};
