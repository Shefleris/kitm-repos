const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

exports.signToken = (id)=>{
    return jwt.sign(
        {id:id},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRES_IN}
    )
}

exports.signup = async (req, res)=>{
    try{
        const newUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            passwordConfirm: req.body.passwordConfirm
        })
        const token = jwt.sign(
            {id: newUser._id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        )
        res.status(201).json({
            status:'Success',
            data: newUser,
            token
        })
    }catch(err){
        res.status(400).json({
            status:'Failed',
            message: err.message
        })
    }
}

exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        //1. Check if email and password exists

        if (!email || !password){
            throw new Error("Please provide email and password")
        }

        //2. Check if user exists and password is correct in db
        const user = await User.findOne({email}).select('+password')
        if (!user || !(await User.correctPassword(password, user.password))){
            throw new Error('Incorrect email or password')
        }

        const token = signToken(user.id);
        //3. If everything is ok, send data to client
        res.status(201).json({
            data:{
                id: user.id,
                name: user.name,
                email: user.email,
            },
            token
        })
    } catch(err){
        res.status(400).json({
            status:'Failed',
            message: err.message
        })
    }
    
}

exports.protect = async (req, res, next)=>{
    //1. get token
    let token;

    try{
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1]
        }
        console.log(token)

        //2. token verification
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

        //3. check if user is in db
        const currentUser = await User.findById(decoded.id)
        if(!currentUser){
            throw new Error('User doesn\'t exist')
        }
        //4. Check if user changed password after token
        if (currentUser.changePasswordAfter(decoded.iat)){
            throw new Error('User changed passwords')
        }

        //5. Grant access
        req.user = currentUser;
        next()
    }catch(err){
        res.status(400).json({
            status:'Failed',
            message: err.message
        })
    }
}
