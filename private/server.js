require('dotenv').config();
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , massive = require('massive');
    // , session = require('express-session')
    // , passport = require('passport')
    // , Auth0Strategy = require('passport-auth0');

const { SERVER_PORT, CONNECTION_STRING, SUCCESS_REDIRECT, SESSION_SECRET, AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, AUTH_CALLBACK_URL } = process.env;

const breeds = require('./Controllers/breeds');
const frontEnd = require('./Controllers/frontEnd');

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());

// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());


// passport.use(new Auth0Strategy({
//     domain: AUTH_DOMAIN,
//     clientID: AUTH_CLIENT_ID,
//     clientSecret: AUTH_CLIENT_SECRET,
//     callbackURL: AUTH_CALLBACK_URL,
//     scope: 'openid profile'
// }, function (accessToken, refreshToken, extraParams, profile, done) {
//     return done(null, profile);
// }));


// passport.serializeUser((profile, done) => {
//     return done(null, profile);
// })

// passport.deserializeUser((profile, done) => {
//     return done(null, profile);
// })

// app.get('/auth', passport.authenticate('auth0'));
// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: SUCCESS_REDIRECT,
//     failureRedirect: '/auth'
// }));


app.get('/api/breedList', breeds.breedList);
app.post('/api/new', breeds.new);
app.get('/api/breed/:id', breeds.detail);
app.delete('/api/breed/:id', breeds.delete);
app.get('/api/all', breeds.all);
app.put('/api/breed/:id', breeds.update);
app.get('/api/photos/:id', frontEnd.photos);
app.get('/api/spotlight', frontEnd.spotlight);
app.get('/api/update/:id', breeds.getUpdate);
app.put('/api/spotlight/:id', breeds.addSpotlight);
app.get('/api/explore', frontEnd.explore);
app.post('/api/quiz', frontEnd.quiz);



massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => { console.log(`Sending peace, love, and positivity from port ${SERVER_PORT}`) })
})