const router = require('express').Router();

const {
getAllUsers,
getUserById,
createUser,
updateUser,
deleteUser,
loginUser
} = require('../../controllers/user-controller');

//Setting up the GET all and POST routes at /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

//Setting up GET by ID, PUT Update and DELETE at /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router
.route('/login')
.post(loginUser);

//exporting to be used in the server
module.exports = router;