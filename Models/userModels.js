const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        fullname: { 
            type: String, 
            require: true, 
            minlength: 3, 
            maxlength: 50
        },
        birthDate: {
            type: String,
            require: true,
            minlength: 3, 
            maxlength: 10,
        },
        address: {
            type: String,
            require: true, 
            minlength: 3, 
            maxlength: 50
        },
        email: {
            type: String, 
            require: true, 
            minlength: 5, 
            maxlength: 700, 
            unique: true,
        },
        phone: {
            type: Number, 
            require: true, 
            minlength: 3, 
            maxlength: 50
        },
        profile_img:{
            type: String
        },
        userName: {
            type: String, 
            require: true, 
            minlength: 3, 
            maxlength: 50,
        },
        password: {
            type: String, 
            require: true, 
            minlength: 3, 
            maxlength: 70,
        },
    },

    {
        timestamps: true
    }

);

//Dinh nghia ham thiet lap user, gan schema vo
const userModel  = mongoose.model("User", userSchema)

module.exports = userModel