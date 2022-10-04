const {Schema, model } = require('mongoose');

const DairySchema = new Schema({
    dairyName: {
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

    dairyDescription: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

// const Dairy = model('Dairy', DairySchema);

module.exports = DairySchema;