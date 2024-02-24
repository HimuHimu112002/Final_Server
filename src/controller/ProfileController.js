const UserModel = require("../model/UserModel.js")
let ReadProfile = async(req, res)=>{
    try {
        let user_id = req.headers.user_id;
        let result= await UserModel.find({_id:user_id})
        res.send({status:"success", data:result})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong"})
    }
}

let UpdateProfile = async(req, res)=>{
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        let Proid = await UserModel.updateOne({_id:user_id},{$set:reqBody},{upsert:true}).select('_id')
        let id = Proid[0]
        res.send({status:"success", message:"Profile Save Success", id:id})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong",})
    }
}


module.exports = {ReadProfile,UpdateProfile};