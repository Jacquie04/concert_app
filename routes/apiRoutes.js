var db = require("../models/");
db.Itinerary.findAll().then(function(dbItinerary) {
  console.log(dbItinerary);
});

var express = require("express");
var router = express.Router();

module.exports = function (app) {
  // Get 15 concert results w sequelize
  router.get("/", function (req, res) {
    db.Itinerary.findAll({dbItinerary}).then(function (results) {
      res.redirect("/itineraries");
    });
  });


  router.get("/itineraries", function(req,res){
    db.Itinerary.findAll()
    .then(function(dbItinerary){
      var hbsObject = {itinerary : dbItinerary};
      console.log(hbsObject)
      return res.render("index", hbsObject);    
    });
  });

  app.get("/api/new", function (req, res) {
    db.Itinerary.findAll({}).then(function (results) {
      res.redirect("/api/new");
    });
  });

  // Create a new itinerart
  app.post("/api/new", function(req, res) {
    console.log(req.body)
    db.Itinerary.create({
      concertName: req.body.concert_name,
      concertDate: req.body.concert_date,
      concertCity: req.body.concert_city,
      concertTime: req.body.concert_time,
      concertVenue: req.body.concert_venue
    }).then(function(results) {
      
    });
  });

  // Delete a concert by id
  app.delete("/api/:id", function(req, res) {
    db.Itinerary.destroy({
      where: { id: req.params.id }
    }).then(function(results) {
      res.json(itinerary_db);
      res.render("index", results);
    });
  });
};
