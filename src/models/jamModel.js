const mongoose = require('mongoose');

const jamSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Jam must have a name'],
        unique: true
    },
    fruitType:{
        type:String,
        required:[true, 'Jam must specify the fruit used']
    },
    batchSize:{
        type:Number,
        required:[true, 'Jam must specify the batch size produced'],
        min:[1,'Batch size must be above 1']
    },
    sugarAmount:{
        type:Number,
        required:[true, 'Jam must specify the sugar amount used'],
        min:[0, 'Sugar amount must be above 0']
    },
    productionDate:{
        type:Date,
        default:Date.now(),
    },
    expirationDate:{
        type:Date,
        default:Date.now()+(6*30*24*60*60*1000)
    }

});

const Jam = mongoose.model('Jam', jamSchema);

module.exports = Jam;