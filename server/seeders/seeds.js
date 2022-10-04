//Meant for seeding database
//Have multiple seeds in this File example user, meat, cheeese
const mongoose = require('../config/connection');
const { User, Cart } = require('../models');
// const Produce = require('../models/Produce');


const seedProduce = [
    {
        produceName: 'tomatoes',
        produceDescription: 'Red juicy',
        price:12.99, 
        quantity: 5
    }
    // {
    //     produceName: 'lettuce',
    //     produceDescription: 'Iceberg Lettuce',
    //     price:4.55 
    // },
    // {
    //     produceName: 'Apples',
    //     produceDescription: 'Red Organic Apples',
    //     price:4.99
    // },
    // {
    //     produceName: 'Potatoes',
    //     produceDescription: 'Red skin Potatoes',
    //     price:6.75
    // },
    // {
    //     produceName: 'Avocado',
    //     produceDescription: 'Ripped for the taking!',
    //     price:2.35 
    // }
];

const seedCart = [
    {
        itemName: 'Tomato',
        itemDescription: 'Red juicy',
        produces: []
    },
]
//     {
//         username: 'Tiffany',
//         email: 'tiffany@gmail.com',
//         password: 'pass123'
//     },
//     {
//         username: 'Dante',
//         email: 'dante@gmail.com',
//         password: 'password1234'
//     },
// ]

const seedDB = async () => {
    // await Produce.deleteMany({});
    // await Produce.insertMany(seedProduce);
    await Cart.deleteMany({});
    await Cart.insertMany(seedCart);
};

seedDB().then(() => {
    mongoose.close();
})