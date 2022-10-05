const {Schema, model } = require('mongoose');

const ProduceSchema = new Schema({
    produceName: {
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

    produceDescription: {
        type: String,
        required: true,
        trim: true
    }
});

// const Produce = model('Produce', ProduceSchema);

module.exports = ProduceSchema;