//import all of the API routes to prefix their endpoint names and package them up
const router = require('express').Router();
const userRoutes = require('./user-routes');


//add the prefix of /users to the routes created in user-routes.js
router.use('/users', userRoutes);

module.exports = router;