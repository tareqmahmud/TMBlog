const app = require('./app');

// Connected to database
require('./db');

// Fire up the app
const PORT = process.env.APP_PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is on fire port ${PORT}`);
})