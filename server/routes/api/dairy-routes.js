const router = require('express').Router();
const {addDairy, removeDairy} = require('../../controllers/dairy-controller');


// api/dairy/userId
//POST a dairy product
router.route('/:userId').post(addDairy);


// api/dairy/userId/dairyId
//DELETE a dairy product
router.route('/:userId/:dairyId').delete(removeDairy);

module.exports = router;