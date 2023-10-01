const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '559370881916-80kldn9e7iceh59mjss1vkvhp3q6up6l.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;
