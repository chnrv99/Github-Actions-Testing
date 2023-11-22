const express = require('express');
const passport = require('passport');
const accountController = require('./../controller/account');
const pointsController = require('./../controller/points');

const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

function middleware(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}



router.post('/', pointsController.points)


module.exports = router;