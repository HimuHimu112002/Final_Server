const mongoose = require('mongoose');
const DataShema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    },
    otp:{
        type: String,
        required: true,
    },
    
},
{timestamps: true, versionKey: false}
);
const UserModel = mongoose.model('user', DataShema);
module.exports = UserModel