
/*
 * GET users listing.
 */
var mongoose = require('mongoose');
var user = require('../models/User');

exports.list_by_name = function(req, res){

  mongoose.connect("mongodb://localhost:27017/bluehunter", function(err,db){
    if(err) console.log(err);
  });
  user.find({'name': new RegExp(req.query.value, 'i')}, function(err, users){
    if(err){
      console.log(err);
    } else {
      mongoose.connection.close();
      res.send(users);
    }
  });
};
