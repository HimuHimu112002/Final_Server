const CartListModel = require("../model/CartListModel");
const mongoose = require("mongoose");
const ObjectID=mongoose.Types.ObjectId

const SaveCartListService = async (req,res) => {
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await CartListModel.updateOne(reqBody,{$set:reqBody},{upsert:true})
        res.send({status:"success", message:"Cart List Save Success"})
    }
    catch (e) {
        res.send({status:"fail", message:"Something Went Wrong",})
    }
}

const GetCartList = async (req,res) => {
    try {
        let data = await CartListModel.find({})
        res.send(data)
    }
    catch (e) {
        res.send({status:"fail", message:"Something Went Wrong",})
    }

}

const RemoveCartListService = async (req,res) => {
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await CartListModel.deleteOne({_id:reqBody})
        res.send({status:"success", message:"remove success",})
    }
    catch (e) {
        res.send({status:"fail", message:"Something Went Wrong",})
    }
}

let CartDetails = async (req, res)=>{
    try{
        let _id = req.params.id;
        let result = await FoodModel.find({_id})
        res.send({status:"success", data:result})
    }catch(e){
        res.send({status:"fail", message:"Something Went Wrong", error:e.toString()})
    }
    
}

module.exports={
SaveCartListService,
RemoveCartListService,
GetCartList,
CartDetails
}