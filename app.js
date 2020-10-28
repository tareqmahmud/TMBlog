const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const MongoDBSessionStore = require('connect-mongodb-session')(expressSession);
const flash = require('connect-flash');
const bindUserWithRequest = require('./middlewares/bindUserWithRequest');
const localDataForViews = require('./middlewares/localDataForViews');
const useAuthRoute = require('./routes/authRoute');
const useDashboardRoute = require('./routes/dashboardRoute');

// Initialize the dotenv
require('dotenv').config();

// Initialize the app
const app = express();

// Set view render engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Session MongoDB Store
const sessionStore = new MongoDBSessionStore({
    uri: process.env.MONGODB_URI,
    collection: 'session'
})

// App middleware collection
const appMiddleware = [
    // Set public directory for server static files
    express.static('public'),

    // Set URL Encoded parser
    express.urlencoded({extended: true}),

    // Set JSON parser
    express.json(),

    // Set morgan middleware
    morgan('dev'),

    // Set express session middleware
    expressSession({
        secret: process.env.APP_SECRET || 'TMBLOG_SECRET_KEY',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 60 * 2 * 1000
        },
        store: sessionStore
    }),

    // Connect flash middleware
    flash(),

    // Bind user object with every request
    bindUserWithRequest(),

    // Send user and logged in status to views
    localDataForViews(),
];

// Use middleware
app.use(appMiddleware);

// Use routes
app.use('/auth', useAuthRoute);
app.use('/dashboard', useDashboardRoute);

module.exports = app;