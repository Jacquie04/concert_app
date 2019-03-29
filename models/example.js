module.exports = function(sequelize, DataTypes) {
  var Itinerary = sequelize.define("Itinerary", {
    band_Name: DataTypes.STRING,
    concert_Date: DataTypes.DATE,
    ticket_price: DataTypes.FLOAT,
    Venue: DataTypes.TEXT,

  });
  return Example;
};
