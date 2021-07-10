const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    F_name:{
        type: String,
        required: true,
    },
    M_name:{
        type: String
    },
    L_name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
    },
   
    date: {
        type: Date,
        default: Date.now
    },
    phone_number:{
        type: Number,
        required: true
    },
    DOB: {
        type: Date
    },
    Education: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true
    },
    pincode:{
        type: Number,
        required: true
    },
    

});

module.exports = User = mongoose.model('user', userSchema);