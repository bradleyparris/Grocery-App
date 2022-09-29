//used to package all the models together
const User = require('./User');
const Produce = require('./Produce');
const Dairy = require('./Dairy');
const Meat = require('./Meat');
const Starch = require('./Starch');
const Goods = require('./Packaged-goods');

module.exports = {User, Produce, Dairy, Meat, Starch, Goods};