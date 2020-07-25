const mongoose = require('mongoose');

// Define our Schema

const gallerySchema = new mongoose.Schema({
    id: Number,
    title: String,
    source: String,
    fileName: String,
    description: String,
    link: String,
    detail: String
});

// Compile and export our model using the above Schema.
module.exports = mongoose.model('Destination', gallerySchema);