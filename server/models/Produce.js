const {Schema, model } = require('mongoose');

const ProduceSchema = new Schema({
    produceName: {
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

    produceDescription: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

const Produce = model('Produce', ProduceSchema);

module.exports = Produce;