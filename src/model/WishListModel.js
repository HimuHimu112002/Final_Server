const mongoose = require('mongoose');
const DataShema = mongoose.Schema({
    productID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "food"
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
},
{timestamps: true, versionKey: false}
);
const WishesModel = mongoose.model('wishes', DataShema);
module.exports = WishesModel