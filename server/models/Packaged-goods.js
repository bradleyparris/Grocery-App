const {Schema, model } = require('mongoose');

const GoodsSchema = new Schema({
    GoodsName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    // price: {
    //     type: Integer,
    //     unique: true,
    //     required: true

    // },

    // Quantity: {
    //     type: Integer,
    //     unique: true,
    //     required: true
    // },

    GoodsDescription: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

const Goods = model('Goods', GoodsSchema);

module.exports = Goods;