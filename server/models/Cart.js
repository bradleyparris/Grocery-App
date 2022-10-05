const {Schema, model } = require('mongoose');
const produceSchema = require('./Produce');
const dairySchema = require('./Dairy');
const MeatSchema = require('./Meat');
const GoodsSchema = require('./Packaged-goods');
const starchSchema = require('./Starch');

const CartSchema = new Schema({


    cartname: {
        type: String,
        required: true,
        trim: true
    },
    //ADDED MODEL FOR ALL OF THESE
    produces: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Produce'
        }
      ],

      dairy: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Dairy'
        }
      ],
      meats: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Meat'
        }
      ],
      starch: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Starch'
        }
      ],
      packagedGoods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Goods'
        }
      ]


    // produces: [produceSchema],
    // dairy: [dairySchema],
    // meats: [MeatSchema],
    // goods: [GoodsSchema],
    // starch: [starchSchema]
  
       

});
// CartSchema.virtual('produceCount').get(function() {
//   return this.produces.length;
//  });
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