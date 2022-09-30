//Meant for seeding database
//Following this article ex https://plainenglish.io/blog/seeding-mongodb-database-from-node-the-simplest-way
const mongoose = require('mongoose');
const Produce = require('../../server/models/Produce');

mongoose
.connect('mongodb://127.0.0.1:27017/Grocery-App', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    console.log('Mongo connection open!!');
})
.catch((err) => {
console.log(err);
});

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
    mongoose.connection.close();
})