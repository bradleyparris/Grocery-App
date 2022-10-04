const {Schema, model } = require('mongoose');
const produceSchema = require('./Produce');
const dairySchema = require('./Dairy');
const MeatSchema = require('./Meat');
const GoodsSchema = require('./Packaged-goods');
const starchSchema = require('./Starch');

const CartSchema = new Schema({


    cartName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    
    produces: [produceSchema],
    dairy: [dairySchema],
    meats: [MeatSchema],
    goods: [GoodsSchema],
    starch: [starchSchema]
  
       

});
CartSchema.virtual('produceCount').get(function() {
  return this.produces.length;
 });
// CartSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });
// CartSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });
// CartSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Cart = model('Cart', CartSchema);

module.exports = Cart;