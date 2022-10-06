const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema(
    {
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Cart'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    }
);

const Order = model('Order', orderSchema);
module.exports = Order;