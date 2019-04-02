// var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };

var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req,res) {
    db.Itinerary.findAll({}).then(function(res) {
      res.render("index", {
        bandName: "name",
        concertDate: "date", ///concert date object name,
        ticketPrice: "price", //price object name ,
        venue: "venue" //venue tickmatester object name
      });
    });
  });
  // Load itinerary page and pass in concert by id
  app.get("/itinerary/:id", function(req, res) {
    db.Itinerary.findOne({ where: { id: req.params.id } }).then(function(dbTicketmaster) {
      res.render("example", {
        bandName: "name",
        concertDate: "date", ///concert date object name""",
        ticketPrice: "price", //price object name "",
        venue: "venue" //venue tickmatester bject name
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
