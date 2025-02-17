const Hotel = require('./../models/hotelModels.js');
const Hotels = require('./../models/hotelModels.js')

// GET ALL Hotels
exports.getAllHotels = async (req, res)=>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json({
            results: hotels.length,
            data:{
                hotels
            }
        })
    } catch (err) {
        res.status(404).json({
            status:'Failed',
            message: err.message
        })
    }
}
// GET Hotel
exports.getHotel = async (req, res) => {
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json({
            status:'Success',
            data: {
                hotel
            }
        })
    } catch (err){
        res.status(404).json({
            status:'Failed',
            message: err.message
        })
    }
};

// POST Hotel
exports.createHotel = async (req, res) =>{
    try{
        const newHotel = await Hotel.create(req.body);
        res.status(201).json({
            status:'Success',
            data:newHotel
        })
    } catch (err){
        res.status(400).json({
            status:'Failed',
            message: err.message
        })

    }
};

// PUT Hotel
exports.updateHotel = async (req, res)=>{
    try{
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        });
        res.status(200).json({
            status: 'Succes',
            data:{
                hotel
            }
        })
    } catch (err){
        res.status(400).json({
            status:'Failed',
            message: err.message
        })
    }
}

// Delete Hotel
exports.deleteHotel = async (req, res) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'Success',
            data: null
        })
    } catch (err){
        res.status(400).json({
            status:'Failed',
            message: err.message
        })
    }
}