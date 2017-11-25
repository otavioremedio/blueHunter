
/*
 * GET users listing.
 */
var mongoose = require('mongoose');
var user = require('../models/User');

exports.list_by_name = function(req, res){

  user.find({'name': new RegExp(req.query.value, 'i')}, function(err, users){
    if(err){
      console.log(err);
    } else {
      res.send(users);
    }
  });
};
