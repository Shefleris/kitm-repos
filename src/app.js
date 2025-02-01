const express = require('express');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

//Routes
const jamRouter = require('./routes/jamRoutes.js')

// Middleware for parsing JSON
app.use(express.json());

app.use('/api/v1/jams', jamRouter)

module.exports = app;
