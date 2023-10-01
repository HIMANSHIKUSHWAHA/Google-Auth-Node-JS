const express = require('express');
const passport = require('../config/passport'); // Assuming passport.js is in a 'config' directory

const router = express.Router();

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/');
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
