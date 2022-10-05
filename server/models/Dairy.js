const {Schema, model } = require('mongoose');

const DairySchema = new Schema({
    dairyName: {
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

    dairyDescription: {
        type: String,
        required: true,
        trim: true
    }
});

// const Dairy = model('Dairy', DairySchema);

module.exports = DairySchema;