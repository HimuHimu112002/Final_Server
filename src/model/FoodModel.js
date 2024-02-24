const mongoose = require('mongoose');
const DataShema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    discription:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    
},
{timestamps: true, versionKey: false}
);
const FoodModel = mongoose.model('food', DataShema);
module.exports = FoodModel