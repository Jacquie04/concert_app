var bcrypt = require('bcrypt');

module.exports = function (sequelize,DataTypes) {

    var User = sequelize.define("user", {
        username: DataTypes.STRING,
        password: DataTypes.TEXT
    });
    
    User.authenticate = function(username, password, done) {
        console.log ('hi from authenticate');
        console.log(username, password);


        User.findOne({where: {username: username} }).then(function(user) {
            if (!user) {return done(null, false, { message: 'Unknown User' + username}); }

            bcrypt.compare(password, user.password, function(err, res) {
                if (!res) { return done(null, false); }
            return done(null, user);
            });
        
            }).catch(function(err) {
                return done(err);
            });
        };

        User.serializeUser = function(user, done) {
            console.log ('serial user is here')
            done(null, user.id);
        };

        User.deserializeUser = function(id, done) {
            console.log('deserializeUser is here');
            User.findOne({where: {id: id}}).then(function(user) {
                console.log('deserializeUser is still here');
                done(null, user);
            }).catch(function(err) {
                done(err);
            });
        };
        return User;
    };
