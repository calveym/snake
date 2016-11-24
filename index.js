
var models = require('./models');
var express = require('express');
var app = express();
var router = express.Router();
var Score = require('./models/score').Score;
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/src'));

// set the home page route
app.get('/', function(req, res) {
  console.log(models);
  
  models.Score.findAll({}).then(function(scores){
    res.render('index', {
      scores: scores
    });
  });
});

app.post('/', function(req, res) {
  models.Score.create({
    name: req.body.name,
    score: req.body.score
  });
  res.redirect('/');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

module.exports = router;
