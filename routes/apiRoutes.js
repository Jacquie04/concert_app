var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(user_db) {
      res.json(user_db);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.user.create(req.body).then(function(user_db) {
      res.json(user_db);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function(req, res) {
    db.user.destroy({ where: { id: req.params.id } }).then(function(user_db) {
      res.json(user_db);
    });
  });


  app.get("/api/new", function (req, res) {
    db.user.findAll({}).then(function (results) {
      res.redirect("/api/new");
    });
  });

  // Create a new itinerart
  app.post("/api/new", function(req, res) {
    console.log(req.body)
    db.user.create({
      concertName: req.body.concert_name,
      concertDate: req.body.concert_date,
      concertCity: req.body.concert_city,
      concertTime: req.body.concert_time,
      concertVenue: req.body.concert_venue
    }).then(function(results) {
      
    });
  });
};
