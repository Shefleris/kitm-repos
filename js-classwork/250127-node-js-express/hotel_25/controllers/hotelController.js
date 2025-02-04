const fs = require('fs');

const hotels = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/hotels.json`)
)

// Middleware

exports.checkID = (req, res, next, val)=>{
    console.log(`Hotel id is: ${val}`);
    if (req.params.id * 1 > hotels.length){
        return res.status(404).json({
            status:'failed',
            message: 'Invalid ID'
        })
    };
    next();
};

exports.checkBody = (req, res, next) => {
    console.log(req.body)
    if (!req.body.name || !req.body.address || !req.body.ranking || !req.body.room_price){
        return res.status(400).json({
            status:'failed',
            message:'Please fill all required fields',
        })
    };
    next();
};

// GET ALL Hotels
exports.getAllHotels = (req, res)=>{
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: hotels.length,
        data: {
            hotels
        }
    })
}
// GET Hotel
exports.getHotel = (req, res) => {
    const id = req.params.id * 1;
    
    const hotel = hotels.find(hotel => hotel.id === id);
    res.status(200).json({
        status:'success',
        data:{
            hotel
        }
    });
};

// POST Hotel
exports.createHotel = (req, res) =>{
    const newID = hotels[hotels.length -1].id + 1;
    const newHotel = Object.assign({id: newID}, req.body);
    
    hotels.push(newHotel);
    fs.writeFile(
        `${__dirname}/../data/hotels.json`,
        JSON.stringify(hotels),
        err => {
            res.status(201).json({
                status: 'success',
                data: {
                    hotel: newHotel
                }
            })
        }
    ) 
};

// PUT Hotel
exports.updateHotel = (req, res)=>{
    res.status(200).json({
        status: 'success',
        hotel: '<Updated hotel>'
    })
}

// Delete Hotel
exports.deleteHotel = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
}