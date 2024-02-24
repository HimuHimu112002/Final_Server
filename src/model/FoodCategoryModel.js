const mongoose = require('mongoose');
const DataShema = mongoose.Schema({
    category:{
        type: String,
        required: true,
        unique: true
    },
},
{timestamps: true, versionKey: false}
);
const categoryModel = mongoose.model('category', DataShema);
module.exports = categoryModel