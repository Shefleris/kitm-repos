const express = require('express');
const jamController = require('../controllers/jamController.js');

const router = express.Router();


router
    .route('/')
    .get(jamController.getAllJams)
    .post(jamController.createJam)

router
    .route('/efficiency')
    .get(jamController.efficiencyJam)

router
    .route('/:id')
    .get(jamController.getJam)
    .patch(jamController.updateJam)
    .delete(jamController.deleteJam)


module.exports = router;