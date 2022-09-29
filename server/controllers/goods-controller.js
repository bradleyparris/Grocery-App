const {User, Produce} = require('../models');


const produceController = {

// add produce to user
addProduce({params, body}, res) {
console.log(body);
Produce.create(body)
.then(({_id}) => {
    return User.findOneAndUpdate(
        {_id: params.userId},
        {$push: {produces: _id}},
        {new: true}
    );
})
.then(dbProduceData => {
    if(!dbProduceData) {
        res.status(404).json({message: 'No user found with this id!'})
        return;
    }
    res.json(dbProduceData);
})
.catch(err => res.json(err));
},

//remove produce
removeProduce({params}, res) {
Produce.findOneAndDelete({_id: params.produceId})
.then(deletedProduce => {
    if(!deletedProduce) {
        return res.status(404).json({message: 'No Produce with this id'});
    }
    return User.findOneAndUpdate(
        {_id: params.userId},
        {$pull: {produces: params.produceId}},
        {new: true}
    );
})
.then(dbProduceData => {
    if(!dbProduceData) {
        res.status(404).json({message: 'No produce with this id!'});
    return;
    }
    res.json(dbProduceData);
})
.catch(err => res.json(err));
}

};

module.exports = produceController;