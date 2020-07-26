// import modules
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const moment = require('moment');

// Models
const Destination = require('./models/gallery.js');

// Import seed data
const dbSeed = require('./seeds/destinations.js');

// Hide creds from repo
const mongoDB = process.env.MONGODB_URL;

// Set up default mongoose connection
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to let us know we've successfully connected
db.once('open', function() {
    console.log('Connected to DB...');
});

// create express app
const app = express();
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Display the index page
app.get('/', function(request, response) {
    response.render('index', {});
})

// Display the register page
app.get('/register', function(request, response) {
    response.render('register', {});
})

// Display the login page
app.get('/login', function(request, response) {
    response.render('login', {});
})

// Make moment available as a variable in every EJS page
app.locals.moment = moment;

// Create a JSON (no EJS here) that returns the entire destination JSON
// This is the endpoint that the frontend fetch-gallery script calls (see: ./public/js/fetch-gallery.js).
app.get('/api/destinations', function(request, response) {
    Destination.find(function(error, destinations) {
        response.json(destinations);
    });
})

// Define an endpoint handler for the individual destination pages
app.get('/:id', function(request, response) {
    Destination.findOne({ 'id': request.params.id }, function(error, destination) {
        // Check for IDs that are not in our list
        if (!destination) {
            return response.render('404-error', {});
            c
        }
        // Compile view and respond
        response.render('gallery-single', destination);
    });
})

// if no file or endpoint found, direct to a 404 error page as a response to the browser
app.use(function(req, res, next) {
    res.status(404);
    res.render('404-error', {});
});

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});