const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const dbSeed = require('./seeds/destinations.js');

// Define model
const Destination = require('./models/gallery.js');


const mongoDB = process.env.MONGODB_URL;

// Set up default mongoose connection
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



db.once('open', function() {
    console.log('Connected to DB...');
    Destination.insertMany(dbSeed, function(error, animal) {
        console.log('Data import completed.')
        mongoose.connection.close();

    });
});