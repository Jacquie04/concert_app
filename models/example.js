// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

module.exports = function(sequelize, DataTypes) {
  var Itinerary = sequelize.define("itinerary_db", {
    band: DataTypes.STRING,
    concert_Date: DataTypes.DATE,
    ticket_Price: DataTypes.FLOAT(11),
    venue: DataTypes.TEXT,

  });
  return Itinerary;
};