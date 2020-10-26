const express = require('express');
const mongoose = require('mongoose');


// Initialize the dotenv
require('dotenv').config();

// Initialize the app
const app = express();

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Hello TMBlog'
    })
})


module.exports = app;