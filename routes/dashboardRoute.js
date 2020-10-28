const route = require('express').Router();
const {isAuthenticated} = require('../middlewares/authMiddleware');
const {
    dashboardGetController
} = require('../controllers/dashboardController');

// Dashboard route
route.get('/', isAuthenticated, dashboardGetController);

module.exports = route;