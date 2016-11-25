'use strict';

var express = require('express');
var router = express.Router();
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config.json')[env];
var db        = {};

console.log(config.use_env_variable);
console.log(process.env);
var sequelize = new Sequelize(process.env[config.use_env_variable]);

if (process.env[NODE_ENV]=== "production") {
  console.log("HELLO");
  console.log(config.use_env_variable);
  console.log(process.env[DATABASE_URL]);
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  console.log("This runs");
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = router;
module.exports = db;
