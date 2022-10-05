const {Schema, model } = require('mongoose');

const MeatSchema = new Schema({
    meatName: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number

    },

    quantity: {
        type: Number,
        required: true
    },

    meatDescription: {
        type: String,
        required: true,
        trim: true
    }
});

// const Meat = model('Meat', MeatSchema);

module.exports = MeatSchema;