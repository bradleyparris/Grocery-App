const express = require('express');
// set up Mongoose to connect when we start the app
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//to connect to our homepage
// app.use(express.static('public'));

//use express on everything in our routes folder
app.use(require('./routes'));

// tells Mongoose which database we want to connect to.
//if environment variable MONGODB_URI exists, use for heroku OR use mongodb://etc.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Grocery-App', {
  // set of configuration options Mongoose asks for more information about.
    useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));