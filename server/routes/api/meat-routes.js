const router = require('express').Router();
const {addMeat, removeMeat} = require('../../controllers/meat-controller');


// api/meat/userId
//POST a meat product
router.route('/:userId').post(addMeat);


// api/meat/userId/meatId
//DELETE a meat product
router.route('/:userId/:dairyId').delete(removeMeat);

module.exports = router;