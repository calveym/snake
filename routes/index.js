var express = require('express');
var router = express.Router();
var models = require('../server/models');

router.get('/snake', function (req, res) {
  res.render('index');
});

module.exports = router;
