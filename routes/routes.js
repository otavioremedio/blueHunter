module.exports = function(app) {
  var user = require('../controllers/userController')
     ,book = require('../controllers/bookController');

  app.get('/', function(req, res){
    res.sendfile('./views/index.html');
  });

  app.get('/user/by-name', user.list_by_name);
  app.get('/book/by-title', book.list_by_title);
  app.get('/book/by-author', book.list_by_author);
};
