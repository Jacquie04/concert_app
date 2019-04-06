
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req,res) {
    db.Itinerary.findAll({}).then(function(data) {
      res.render("index", {
        concertName: "name",
        concertDate: "date", ///concert date object name,
        concerTime: "time",
        concertVenue: "venue" //venue tickmatester object name
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};