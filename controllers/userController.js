
/*
 * GET users listing.
 */
var user = require('../models/User');

exports.list_by_name = function(req, res){

  user.find({}, function(err, users){
    if(err){
      console.log(err);
    } else {
      if (users.length == 0){
        users = JSON.parse('[{"name":"Sua pesquisa não encontrou resultados, por favor, tente com um novo texto."}]');
      }

      res.send(users);
    }
  });
};
