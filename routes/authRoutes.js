var db = require("../models");
var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models').User;
var bcrypt = require('bcrypt');



router.get('/signup', (req, res) => {
    console.log("hello");
    res.render('signup', {});
});


/*router.get('/', (req, res) => {
    res.render('index', { user: req.user });
});*/

router.post('/signup', (req, res, next) => {
    console.log('post signup');
    console.log(req.body);
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        db.user.create({
            username: req.body.username,
            password: hashedPass
        }).then(function () {
            passport.authenticate('local')(req, res, () => {
                req.session.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    console.log('saved session after signup');
                    res.redirect('/login');
                });
            });
        }).catch(function (err) {
            return res.render('signup', { error: err.message });
        });
    });
});

router.get('/login', (req, res) => {
    console.log(req.query, "login req user page")
    res.render('login', {user : req.query.user});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/' }), (req, res, next) => {
    console.log('hi from post to login')
    req.session.save(err => {
        if (err) {
            return next(err);
        }
        res.redirect('/login');
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        };
        res.redirect('/');
    });
});



module.exports = router;