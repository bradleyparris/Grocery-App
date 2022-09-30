//Meant for seeding database
//Have multiple seeds in this File example user, meat, cheeese
const mongoose = require('../config/connection');
const Produce = require('../models/Produce');


const seedProduce = [
    {
        produceName: 'tomatoes',
        produceDescription: 'Red juicy'
    },
    {
        produceName: 'lettuce',
        produceDescription: 'Iceberg Lettuce'
    },
    {
        produceName: 'Apples',
        produceDescription: 'Red Organic Apples'
    },
    {
        produceName: 'Potatoes',
        produceDescription: 'Red skin Potatoes'
    },
    {
        produceName: 'Avocado',
        produceDescription: 'Ripped for the taking!'
    }
];

const seedDB = async () => {
    await Produce.deleteMany({});
    await Produce.insertMany(seedProduce);
};

seedDB().then(() => {
    mongoose.close();
})