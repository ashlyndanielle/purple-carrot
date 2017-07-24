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

    // profile is the user profile
    function(accessToken, refreshToken, extraParams, profile, done) {
        console.log("Profile returned from Auth0", profile);

        // when you send in parameters to you database it thinks it's an array so you must use brackets...maybe
        // This is where we will check if the user exists in our database.
        // If it does, return that user in the done at the bottom
        // Else, fire a create_user query to input that user into your database, and then return that user
        dbInstance.get_user_by_id([profile.identities[0].user_id])
            .then((user) => {
                if (user[0]) {
                    done(null, user[0]);
                } else {
                    // this originally will return the entire user table so by adding RETURNING * into the create_user query it only returns that user
                    dbInstance.create_user(profile.identities[0].user_id, profile.displayName)
                        .then((user) => {
                            done(null, user[0])
                        })
                }
            })
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

        // this is supposed to get the specific recipe
    app.get('/getRecipes/:id', (req, res, next) => {
        dbInstance.get_recipe_by_id(res.data.id).then( response => res.status(200).send(response))
    })

    app.get('/getcart', (req, res, next) => {
        dbInstance.get_cart().then( response => res.status(200).send(response));
    })
        // this is supposed to get the user's cart
    
    
    // app.get('/getCart/:id', (req, res, next) => {
    //     dbInstance.get_cart_by_id(res.data.id).then( (response) => res.status(200).send(response))
    // })

    
    app.post('/addtocart', (req, res, next) => {
        dbInstance.post_cart([req.body.recipeid, req.body.userid, req.body.quantity])
            .then( () => res.status(200).send('added stuff'))
    })




    // ENDPOINTS RELATED TO LOGIN
    // #1: this sends off to authentication
    app.get('/auth', passport.authenticate('auth0'));
    // #2: this redirects back to my recipes page
    app.get('/auth/callback', passport.authenticate('auth0', 
    { successRedirect: 'http://localhost:3000/recipes'}));
    // #3: this gives me the user that is logged in
    app.get('/auth/me', function(req, res) {
        console.log('am i working ', req.user)
        if (!req.user) return res.status(200).send('');
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