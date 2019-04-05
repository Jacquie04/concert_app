require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var db = require("./models");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main" })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
app.use('/auth', require('./routes/authRoutes'));
require("./routes/htmlRoutes")(app);
// require("./routes/authRoutes")(app);

app.use(function(req, res, next) {
  res.render("404");
});


passport.use(new LocalStrategy(db.user.authenticate));
passport.serializeUser(db.user.serializeUser);
passport.deserializeUser(db.user.deserializeUser);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
