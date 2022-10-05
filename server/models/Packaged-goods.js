const {Schema, model } = require('mongoose');

const GoodsSchema = new Schema({
    GoodsName: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true

    },

    quantity: {
        type: Number,
        required: true
    },

    GoodsDescription: {
        type: String,
        required: true,
        trim: true
    }
});

// const Goods = model('Goods', GoodsSchema);

module.exports = GoodsSchema;