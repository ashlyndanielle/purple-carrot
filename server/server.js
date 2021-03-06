const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const config = require('./config.js');
const port = config.port;
const stripe = require('stripe')(config.secret_key);

const app = express();

app.use(express.static(__dirname + '/../build'));
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
        dbInstance.get_users()
            .then( response => res.status(200).send(response))
    })

    app.get('/getRecipes', (req, res, next) => {
        dbInstance.get_recipes()
            .then( response => res.status(200).send(response))
    })

        // this is supposed to get the specific recipe
    app.get('/getSpecificRecipe', (req, res, next) => {
        dbInstance.get_recipe_by_id(res.data.id)
            .then( response => res.status(200).send(response))
    })

    app.get('/getcart', (req, res, next) => {
        dbInstance.get_cart()
            .then( response => res.status(200).send(response));
    })

    app.get('/gettotal', (req, res, next) => {
        dbInstance.get_total()
            .then( response => res.status(200).send(response))
    })


    app.delete('/deleteitem', (req, res, next) => {
        console.log("SERVER",req.query)
        dbInstance.delete_cart_item(req.query.recipesid)
            .then( res.status(200).send('REMOVED CART ITEM'))
    })

    // the config variable that is passed into the post request in RecipesMain is found on 
    // req in body (if you console.log it)...hense req.body.recipeid, etc...
    app.post('/addtocart', (req, res, next) => {
        dbInstance.post_cart([req.body.recipeid, req.body.userid, req.body.quantity, req.body.recipeThumbnail, req.body.name, req.body.price])
            .then( () => res.status(200).send('added stuff'))
    })

    app.put('/updatequantity', (req, res, next) => {
        dbInstance.update_quantity([req.body.quantity, req.body.recipeid])
            .then( () => res.status(200).send('Changed Quantity'))
    })

    // stripe endpoint

app.post('/payment', function(req, res, next){
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.id,
  description: 'Test charge from react app'
}, function(err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});




    // ENDPOINTS RELATED TO LOGIN
    // #1: this sends off to authentication
    app.get('/auth', passport.authenticate('auth0'));
    // #2: this redirects back to my recipes page
    app.get('/auth/callback', passport.authenticate('auth0', 
    { successRedirect: 'http://localhost:3000/recipes'}));
    // #3: this gives me the user that is logged in
    app.get('/auth/me', function(req, res) {
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