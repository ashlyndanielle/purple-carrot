const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const config = require('./config.js');
const port = config.port

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}))

// Middleware - Express Session
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: config.sessionSecret
}))

// Middleware - Passport 
app.use(passport.initialize());
app.use(passport.session());


// Massive Setup
massive(config.herokuConnect).then((dbInstance) => {
    app.set('db', dbInstance);

    // Schema file, which resets your database tables
    dbInstance.set_schema()
        .then( () => console.log('Tables successfully reset'))
        .catch( (err) => console.log('Try again', err));

    // Passport setup
    passport.use(new Auth0Strategy({
        domain:       config.auth0.domain,
        clientID:     config.auth0.clientID,
        clientSecret: config.auth0.clientSecret,
        callbackURL:  config.auth0.callbackUrl
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
        console.log("Profile returned from Auth0", profile);
        // This is where we will check if the user exists in our database.
        // If it does, return that user in the done at the bottom
        // Else, fire a create_user query to input that user into your database, and then return that user

        // if (user) {
        //     done(null, user)
        // } else {
        //     db.create_user([profile.identities[0].user_id, profile.displayName]).then(function(err, user) {
        //         done(null, user[0])
        //     })
        // }


        done(null, profile)
    }
    ));


    // Passport setup part 2
    // Whatever is passed through in the DONE from above, gets passed down into "USER"
    passport.serializeUser(function(user, done) {
        console.log('serializing', user);
        done(null, user);
    });
    passport.deserializeUser(function(user, done) {
        console.log('deserialize', user)
        done(null, user);
    });


    // My endpoints
    app.get('/getUsers', (req, res, next) => {
        dbInstance.get_users().then( response => res.status(200).send(response))
    })

    app.get('/getRecipes', (req, res, next) => {
        dbInstance.get_recipes().then( response => res.status(200).send(response))
    })

    // ENDPOINTS RELATED TO LOGIN
    // #1
    app.get('/auth', passport.authenticate('auth0'));
    // #2
    app.get('/auth/callback', passport.authenticate('auth0', 
    { successRedirect: 'http://localhost:3000/'}));
    // #3
    app.get('/auth/me', function(req, res) {
    if (!req.user) return res.status(200).send('No one logged in!');
    res.status(200).send(req.user);
    })
    // #4
    app.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('http://localhost:3000/');
    })
});


app.listen(port, () => {
    console.log(`Delivering fresh, nutritious goodies on port ${port}`)
})