
/*
 * GET books listing.
 */
 var book = require('../models/Book');

exports.list_by_title = function(req, res){
  book.find({'title': new RegExp(req.query.value, 'i')}, function(err, books){
    if(err){
      console.log(err);
    } else {
      if (books.length == 0){
        books = JSON.parse('[{"title":"Sua pesquisa não encontrou resultados, por favor, tente com um novo texto."}]');
      }
      res.send(books);
    }
  });
};

exports.list_by_author = function(req, res){
  book.find({'author': new RegExp(req.query.value, 'i')}, function(err, books){
    if(err){
      console.log(err);
    } else {
      if (books.length == 0){
        books = JSON.parse('[{"author":"Sua pesquisa não encontrou resultados, por favor, tente com um novo texto."}]');
      }
      res.send(books);
    }
  });
};
