const {Dairy, User} = require('../models');


const dairyController = {

// add Dairy product to user
addDairy({params, body}, res) {
console.log(body);
Dairy.create(body)
.then(({_id}) => {
    return User.findOneAndUpdate(
        {_id: params.userId},
        {$push: {dairy: _id}},
        {new: true}
    );
})
.then(dbDairyData => {
    if(!dbDairyData) {
        res.status(404).json({message: 'No user found with this id!'})
        return;
    }
    res.json(dbDairyData);
})
.catch(err => res.json(err));
},

//remove Dairy product 
removeDairy({params}, res) {
Dairy.findOneAndDelete({_id: params.dairyId})
.then(deletedDairy => {
    if(!deletedDairy) {
        return res.status(404).json({message: 'No Dairy product with this id'});
    }
    return User.findOneAndUpdate(
        {_id: params.userId},
        {$pull: {dairy: params.dairyId}},
        {new: true}
    );
})
.then(dbDairyData => {
    if(!dbDairyData) {
        res.status(404).json({message: 'No Dairy product with this id!'});
    return;
    }
    res.json(dbDairyData);
})
.catch(err => res.json(err));
}

};

module.exports = dairyController;