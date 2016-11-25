var models = require('./server/models');
var Score = require('./server/models/score').Score;
var express = require('express');
var router = express.Router();
var app = express();
var index = require('./routes/index');
var bodyParser = require('body-parser');


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', index);

// set the home page route
app.get('/', function(req, res) {
  res.redirect('/snake');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

module.exports = app;

var pg = require('pg');

app.get('/db', function (request, response) {
  pg.connect(process.env.postgresql-shaped-39364, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { console.log("ok")} ); }
    });
  });
});
