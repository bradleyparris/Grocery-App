const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CartSchema = new Schema(
    {
        cartItems: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

CartSchema.virtual('itemCount').get(function() {
    return this.cartItems.length
})

const Cart = model('Cart', CartSchema);
module.exports = Cart;