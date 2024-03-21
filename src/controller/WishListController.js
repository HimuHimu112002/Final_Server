const WishListModel = require("../model/WishListModel");
const mongoose = require("mongoose");
const ObjectID=mongoose.Types.ObjectId
const SaveWishListService = async (req,res) => {
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await WishListModel.updateOne(reqBody,{$set:reqBody},{upsert:true})
        res.send({status:"success", message:"Wish List Save Success"})
    }
    catch (e) {
        res.send({status:"fail", message:"Something Went Wrong",})
    }
}

const GetWishList = async (req,res) => {
    try {
        let data = await WishListModel.find({}).populate("productID")
        res.send(data)
    }
    catch (e) {
        res.send({status:"fail", message:"Something Went Wrong",})
    }

}

const RemoveWishListService = async (req,res) => {
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await WishListModel.deleteOne(reqBody)
        res.send({status:"success", message:"remove success",})
    }
    catch (e) {
        res.send({status:"fail", message:"Something Went Wrong",})
    }
}

module.exports={
SaveWishListService,
RemoveWishListService,
GetWishList
}