const {Schema, model } = require('mongoose');

const StarchSchema = new Schema({
    starchName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true

    },

    quantity: {
        type: Number,
        unique: true,
        required: true
    },

    starchDescription: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

// const Starch = model('Starch', StarchSchema);

module.exports = StarchSchema;