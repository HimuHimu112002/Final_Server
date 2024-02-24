const mongoose = require('mongoose');
const DataShema = mongoose.Schema({
    brand:{
        type: String,
        required: true,
        unique: true
    },
},
{timestamps: true, versionKey: false}
);
const brandModel = mongoose.model('brand', DataShema);
module.exports = brandModel