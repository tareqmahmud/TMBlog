const mongoose = require('mongoose');

/**
 * Connected mongodb database
 *
 * TODO: return promise after connected database
 */
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Database connected successfully');
}).catch(err => {
    console.log(err);
})