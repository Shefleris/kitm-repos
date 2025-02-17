const express = require('express');
const hotelController = require('../controllers/hotelController.js');
const authController = require('../controllers/authController.js');
const router = express.Router();

router
    .route('/')
    .get(authController.protect,hotelController.getAllHotels)
    .post(hotelController.createHotel)

router
    .route('/:id')
    .get(hotelController.getHotel)
    .patch(hotelController.updateHotel)
    .delete(hotelController.deleteHotel)

module.exports = router;