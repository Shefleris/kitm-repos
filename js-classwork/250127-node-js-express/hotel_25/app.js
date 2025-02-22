const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === "development"){
	app.use(morgan('dev'));
}
// Routes
const hotelRouter = require('./routes/hotelRoutes.js');

// Middleware for parsing JSON
app.use(express.json());

app.use('/api/v1/hotels', hotelRouter)

module.exports = app;
