const { User } = require('../models');

//callback functions for the Express.js routes, two parameters: req and res

const userController = {
//get all the users
getAllUsers(req, res) {
    User.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},

//get user by Id
getUserById({params}, res) {
User.findOne({_id: params.id})
.then(dbUserData => {
    //if no user is found, send 404
    if(!dbUserData) {
        res.status(404).json({message: 'No user with this id!'})
        return;
    }
    res.json(dbUserData);
})
.catch(err => {
    console.log(err);
    res.status(400).json(err);
});
},

//POST /api/users
//create the user
createUser({body}, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
},

//PUT /api/users/:id
//Update a user
updateUser({params, body }, res) {
    // By setting the parameter to true, we're telling Mongoose to return the new version of the document.
    User.findOneAndUpdate({_id: params.id}, body, {new: true})
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
},

//DELETE /api/users/:id
//deleting a user
deleteUser({params}, res) {
    User.findOneAndDelete({_id: params.id})
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: 'No User found with this id!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
},

loginUser(req, res) {
    User.find({
            email: req.body.email
    }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user with that email address!' });
          return;
        }
    
        res.json({ user: dbUserData });
    
       // Verify user
    
      });  

//       User.findById({
//         _id: params.id
// }).then(dbUserData => {
//     console.log(dbUserData);
//     if (!dbUserData) {
//       res.status(400).json({ message: 'No user with that email address!' });
//       return;
//     }

//     res.json({ user: dbUserData });

//     // Verify user

//   });  
}


}

module.exports = userController;