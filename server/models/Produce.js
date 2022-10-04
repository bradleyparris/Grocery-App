const {Schema, model } = require('mongoose');

const ProduceSchema = new Schema({
    produceName: {
        type: String,
        unique: true,
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

    produceDescription: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

// const Produce = model('Produce', ProduceSchema);

module.exports = ProduceSchema;