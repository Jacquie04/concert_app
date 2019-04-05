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
};
