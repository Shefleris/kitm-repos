const express = require('express');
const hotelController = require('../controllers/hotelController.js');

const router = express.Router();

router.param('id', hotelController.checkID);

router
    .route('/')
    .get(hotelController.getAllHotels)
    .post(hotelController.checkBody, hotelController.createHotel)

router
    .route('/:id')
    .get(hotelController.getHotel)
    .patch(hotelController.updateHotel)
    .delete(hotelController.deleteHotel)

module.exports = router;