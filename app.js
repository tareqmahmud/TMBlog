const express = require('express');
const morgan = require('morgan');
const useAuthRoute = require('./routes/authRoute');

// Initialize the dotenv
require('dotenv').config();

// Initialize the app
const app = express();

// Set view render engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// App middleware collection
const appMiddleware = [
    // Set public directory for server static files
    express.static('public'),

    // Set URL Encoded parser
    express.urlencoded({extended: true}),

    // Set JSON parser
    express.json(),

    // Set morgan middleware
    morgan('dev')
];

// Use middleware
app.use(appMiddleware);

// Use routes
app.use('/auth', useAuthRoute);

module.exports = app;