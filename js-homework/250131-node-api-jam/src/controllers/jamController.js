const Jam = require('../models/jamModel.js');

// GET ALL Jams
exports.getAllJams = async (req, res)=>{
    try {
        const jams = await Jam.find();
        res.status(200).json({
            status:'Success',
            jamCount: jams.length,
            data: {
                jams
            }
        })
    } catch (err){
        res.status(404).json({
            status:'Failed',
            message: err
        })
    }
}

//GET by Id Jam
exports.getJam = async (req, res)=>{
    try {
        const jam = await Jam.findById(req.params.id);
        if (jam === null){
            throw "Jam by that id not found"
        }
        res.status(200).json({
            status:'Success',
            data: {
                jam
            }
        })
    } catch (err){
        res.status(404).json({
            status:'Failed',
            message: err
        })
    }
}

//POST Jam
exports.createJam = async (req, res)=>{
    try {
        const jam = await Jam.create(req.body);
        res.status(201).json({
            status:'Success',
            data: {
                jam
            }
        })
    } catch (err){
        res.status(400).json({
            status:'Failed',
            message: err
        })
    }
}
//PUT Jam
exports.updateJam = async (req, res)=>{
    try {
        const jam = await Jam.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status:'Success',
            data: {
                jam
            }
        })
    } catch (err){
        res.status(400).json({
            status:'Failed',
            message: err
        })
    }
}

exports.deleteJam = async (req, res)=>{
    try {
        await Jam.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'Success',
            data: null
        })
    } catch (err){
        res.status(400).json({
            status:'Failed',
            message: err
        })
    }
};

exports.efficiencyJam = async (req, res) => {
    try {
        const productionEfficiency = await Jam.aggregate([{"$group":{
            "_id":null,
            "totalBatchSize": {"$sum":"$batchSize"},
            "totalSugarAmount": {"$sum":"$sugarAmount"}
        }},
        {
            "$project":{
                "result": {
                    "$divide":["$totalBatchSize", "$totalSugarAmount"]
                }
            }
        }
        ])
        res.status(200).json({
            status:'Success',
            efficiency: productionEfficiency.result > 5? "efficient": "innefficient"
        })
    } catch (err) {
        res.status(400).json({
            status:'Failed',
            message: err
        })
    }
}