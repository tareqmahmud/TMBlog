const express = require('express');

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

// Fire up the app
const PORT = process.env.APP_PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is on fire port ${PORT}`);
})