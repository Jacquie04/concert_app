 
var db = require("../models");


module.exports = function (app) {
    // Get 15 concert results w sequelize
    // router.get("/", function (req, res) {
    //     db.Itinerary.findAll({ dbItinerary }).then(function (results) {
    //         res.redirect("/itineraries");
    //     });
    // });


    app.get("/itineraries", function (req, res) {
        db.Itinerary.findAll()
            .then(function (dbItinerary) {
                var hbsObject = { itinerary: dbItinerary };
                console.log(hbsObject)
                return res.render("login", hbsObject);
            });
    });

   

    // Create a new itinerart


}