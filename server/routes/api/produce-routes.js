const router = require('express').Router();
const {addProduce, removeProduce} = require('../../controllers/produce-controller');


// api/produces/userId
//POST a produce
router.route('/:userId').post(addProduce);


// api/produces/userId/produceId
//DELETE a produce
router.route('/:userId/:produceId').delete(removeProduce);

module.exports = router;