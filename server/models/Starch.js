const {Schema, model } = require('mongoose');

const StarchSchema = new Schema({
    starchName: {
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

    starchDescription: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

const Starch = model('Starch', StarchSchema);

module.exports = Starch;