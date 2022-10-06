const { Schema, model } = require('mongoose');

const CartSchema = new Schema(
    {
        cartItems: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
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