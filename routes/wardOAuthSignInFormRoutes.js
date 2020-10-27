const express = require('express');
const router = express.Router();
const passport = require('passport');

// gets and displays a login page
router.get('/wardOAuthSignInForm', (req, res) => {
    res.render('wardOAuthSignInForm')
})

//process the username and password
// router.post('/agricsignin', passport.authenticate('local'), (req, res) => {
//     req.session.user = req.user;
//     res.redirect('/officeregistration/officeregistration');
// });
router.post('/wardOAuthSignInForm', (req, res) => {
    res.redirect('/');
});
module.exports = router;