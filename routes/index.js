var express = require('express');
var router = express.Router();
var models = require('../server/models');

router.get('/snake', function (req, res) {
  res.render('index');
});

router.post('/', function(req, res) {
  var name = req.body.name,
      score = req.body.score;
  models.Score.create({name: name, score: score});
  res.redirect('/snake');
});

router.get("/highscore1997456/:browser", function (req, res) {
  models.Score.findAll({}).then(function (scores) {
    res.render("highscore", {scores: scores, lastScore: req.params.browser});
  });
});

module.exports = router;
