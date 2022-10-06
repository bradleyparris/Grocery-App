//Meant for seeding database
//Have multiple seeds in this File example user, meat, cheeese
const mongoose = require('../config/connection');
const { User, Product } = require('../models');


const seedProduct = [
    {
        name: 'tomatoes',
        price: 220,
        category: 'produce',
        description: 'Red juicy'
    },
    {
        name: 'lettuce',
        price: 220,
        category: 'produce',
        description: 'Iceberg Lettuce'
    },
    {
        name: 'Apples',
        price: 330,
        category: 'produce',
        description: 'Red Organic Apples'
    },
    {
        name: 'Potatoes',
        price: 540,
        category: 'produce',
        description: 'Red skin Potatoes'
    },
    {
        name: 'Avocado',
        price: 130,
        category: 'produce',
        description: 'Ripped for the taking!'
    },
    {
        name: 'Milk',
        price: 550,
        category: 'dairy',
        description: 'tasty white drink'
    },
    {
        name: 'Steak',
        price: 1000,
        category: 'meat',
        description: 'When cooked, a very delicious meal!'
    },
    {
        name: 'Raspberry Cheesecake',
        price: 1000,
        category: 'dessert',
        description: 'Great for any cheesecake lover!'
    }
];

const seedUser = [
    {
        username: 'Ricardo',
        email: 'ricardo@gmail.com',
        password: 'password1234'
    }
]

const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(seedProduct);
    await User.deleteMany({});
    await User.insertMany(seedUser);
};

seedDB().then(() => {
    mongoose.close();
})