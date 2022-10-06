const router = require('express').Router();
const {addProduce, removeProduce, getAllProduce} = require('../../controllers/produce-controller');

router.route('/').get(getAllProduce);

// api/produces/userId
//POST a produce
router.route('/:userId').post(addProduce);


// api/produces/userId/produceId
//DELETE a produce
router.route('/:userId/:produceId').delete(removeProduce);

module.exports = router;