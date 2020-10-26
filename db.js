const mongoose = require('mongoose');

/**
 * Connected mongodb database
 *
 * TODO: return promise after connected database
 */
mongoose.connect('mongodb://localhost:27017/tmblog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully');
}).catch(err => {
    console.log(err);
})