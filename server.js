
/**
 * Module dependencies.
 */

var express = require('express')
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

//routes
require('./routes/routes')(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// mongodb://localhost:27017/bluehunter

var url = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
var promise = mongoose.connect(url, {
  useMongoClient: true
});

promise.then(function(db) {
  console.log("connected");
}, function(err){
  console.log("Error: " + err);
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
