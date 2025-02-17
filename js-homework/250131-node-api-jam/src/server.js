const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path:`${__dirname}/../config.env`})

const app = require('./app.js');

const port = process.env.PORT|| 3000;

const DB = process.env.DATABASE.replace(
    '<db_password>', process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB)
    .then(()=>{
        console.log("DB connected is Ok")
    })

// Start server
app.listen(port,()=>{
    console.group('--------')
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`)
    console.groupEnd()
    console.log('--------')
})