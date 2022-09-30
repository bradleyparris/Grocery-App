// set up Mongoose to connect when we start the app
const mongoose = require('mongoose');

//to connect to our homepage
// app.use(express.static('public'));

// tells Mongoose which database we want to connect to.
//if environment variable MONGODB_URI exists, use for heroku OR use mongodb://etc.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Grocery-App', {
  // set of configuration options Mongoose asks for more information about.
    useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;