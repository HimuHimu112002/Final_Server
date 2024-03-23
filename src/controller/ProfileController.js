const UserModel = require("../model/UserModel.js")
const ProfileModel = require("../model/ProfileModel.js")
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

let UserProfile = async(req, res)=>{
    try {

        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await ProfileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
        res.send({status:"success", message:"Profile Save Success"})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong",})
    }

}
let UserReadProfile = async(req, res)=>{
    try {
        let user_id = req.headers.user_id;
        let result= await ProfileModel.find({userID:user_id})
        res.send({status:"success", data:result})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong"})
    }
}
module.exports = {ReadProfile,UpdateProfile,UserProfile,UserReadProfile};