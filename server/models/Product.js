const {Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    // Quantity: {
    //     type: Integer,
    //     unique: true,
    //     required: true
    // },

    description: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

const Product = model('Product', ProductSchema);

module.exports = Product;