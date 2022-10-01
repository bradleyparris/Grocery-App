//Meant for seeding database
//Have multiple seeds in this File example user, meat, cheeese
const mongoose = require('../config/connection');
const { User } = require('../models');
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

const seedUser = [
    {
        userName: 'Ricardo',
        email: 'ricardo@gmail.com',
        password: 'password1234'
    }
]

const seedDB = async () => {
    await Produce.deleteMany({});
    await Produce.insertMany(seedProduce);
    await User.deleteMany({});
    await User.insertMany(seedUser);
};

seedDB().then(() => {
    mongoose.close();
})