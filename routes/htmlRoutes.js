var db = require("../models");
var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function(app) {
  // Load index page
  router.get("/auth/login", 
  ensureLoggedIn('/'),
  function(req, res) {
    console.log(user_db, "db?")
    db.user.findOne({}).then(function(user_db) {
      res.render("index", {
       user: user_db,
       routeNumber: 1,
       user: req.user
      });
    });
  });


  // app.use('/', router);
  app.get("/", function(req, res) {
    db.user.findAll({}).then(function(user_db) {
      res.render("index", {
        msg: "Welcome!",
        user: user_db
      });
    });
  });

// app.get("/signup", function(req, res) {
//     db.user.findAll({}).then(function(user_db) {
//       res.render("signup", {
//         msg: "Welcome!",
//         user: user_db
//       });
//     });
//   });

  // Load example page and pass in an example by id
  app.get("/login/:id", function(req, res) {
    db.user.findOne({ where: { id: req.params.id } }).then(function(user_db) {
      res.render("user", {
        user: user_db
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
