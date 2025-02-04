const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Please tell your name']
    },
    email:{
        type:String,
        required: [true, 'Please fill your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'is not email'],
    },
    photo:{
        type:String,
    },
    password:{
        type:String,
        required:[true, 'Please fill out your password'],
        minlength:8,
        select:false,
    },
    passwordConfirm:{
        type:String,
        required:[true, 'Please confirm your password'],
        minlength:8,
        validate:{
            validator: function(el){
                return el == this.password
            },
            message: 'Passwords are not the same'
        },
        passwordChangedAt:Date,
        passwordResetToken:String,
        passwordResetExpires:Date,
        active:{
            type:Boolean,
            default:true,
            select:false
        }
    },
}) 

userSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        return next()
    }
    //hash password with cost 12
    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined
    next()
})

userSchema.methods.correctPassword = async (
    candidatePassword,
    userPassword
)=>{
    return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.changedPasswordAfter = function(JWTTimstamp){
    if( this.passwordChangedAt){
        const changedTimestamp = parseINt(
            this.passwordChangedAt.getTime()/1000.10
        )
        return JWTTimstamp<changedTimestamp;
    }
}

const User = mongoose.model('User', userSchema)



// more functions

module.exports = User