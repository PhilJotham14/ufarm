const express = require('express');
const router = express.Router();
const passport = require('passport');

// gets and displays a login page
router.get('/agricsignin', (req, res) => {
    res.render('agricOfficerSignInForm')
})

//process the username and password
// router.post('/agricsignin', passport.authenticate('local'), (req, res) => {
//     req.session.user = req.user;
//     res.redirect('/officeregistration/officeregistration');
// });
// router.post('/agricsignin', (req, res) => {
//     res.redirect('/wardOneDashboard');
// });

//process the username and password
router.post('/agricsignin', passport.authenticate('local'), (req, res) => {
    req.session.user = req.user;
    res.redirect('/wardOneDashboard');
});
module.exports = router;