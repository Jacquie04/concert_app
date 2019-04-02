// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };

var db = require("../models");

module.exports = function(app) {
  // Get 15 concert results w sequelize
  app.get("/api/all", function(req, res) {
    db.Itinerary.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new itinerart
  app.post("/api/new", function(req, res) {
    console.log(req.body);
    db.Itinerary.create({
      band: req.body.band,
      concert_Date: req.body.concert_Date,
      ticket_Price: req.body.ticket_Price,
      venue: req.body.venue}
      ).then(function(results) {
      res.render("index");
    });
  });

  // Delete a concert by id
  app.delete("/api/itinerarysgit /:id", function(req, res) {
    db.Itinerary.destroy({ 
      where: { id: req.params.id } }).then(function(results) {
      res.json(itinerary_db);
    });
  });
};
