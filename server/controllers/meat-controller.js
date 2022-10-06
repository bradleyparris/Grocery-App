const {User, Meat} = require('../models');


const MeatController = {

// add Meat product to user
addMeat({params, body}, res) {
console.log(body);
Meat.create(body)
.then(({_id}) => {
    return User.findOneAndUpdate(
        {_id: params.userId},
        {$push: {meats: _id}},
        {new: true}
    );
})
.then(dbMeatData => {
    if(!dbMeatData) {
        res.status(404).json({message: 'No user found with this id!'})
        return;
    }
    res.json(dbMeatData);
})
.catch(err => res.json(err));
},

//remove Meat product
removeMeat({params}, res) {
Meat.findOneAndDelete({_id: params.meatId})
.then(deletedMeat => {
    if(!deletedMeat) {
        return res.status(404).json({message: 'No Meat with this id'});
    }
    return User.findOneAndUpdate(
        {_id: params.userId},
        {$pull: {meats: params.meatId}},
        {new: true}
    );
})
.then(dbMeatData => {
    if(!dbMeatData) {
        res.status(404).json({message: 'No Meat with this id!'});
    return;
    }
    res.json(dbMeatData);
})
.catch(err => res.json(err));
}

};

module.exports = MeatController;