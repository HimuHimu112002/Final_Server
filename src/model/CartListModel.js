const mongoose = require('mongoose');
const DataShema = mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    },
    brand:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:String
    },
    qty:{
        type:String
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
},
{timestamps: true, versionKey: false}
);
const WishesModel = mongoose.model('cart', DataShema);
module.exports = WishesModel