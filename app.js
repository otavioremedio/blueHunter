
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./controllers/userController')
  , book = require('./controllers/bookController')
  , http = require('http')
  , mongoose = require('mongoose')
  , path = require('path');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/user/by-name', user.list_by_name);
app.get('/book/by-title', book.list_by_title);
app.get('/book/by-author', book.list_by_author);

mongoose.connect("mongodb://localhost:27017/bluehunter", function(err,db){
  if(err) console.log(err);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
});

module.exports = app;
