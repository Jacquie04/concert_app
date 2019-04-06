module.exports = function (sequelize, DataTypes) {
    var Itinerary = sequelize.define("Itinerary", {
      concertName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      concertDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      concertTime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      concertCity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      concertVenue: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
    return Itinerary;
  };