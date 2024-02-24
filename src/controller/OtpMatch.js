const UserModel = require("../model/UserModel")
let OtpMatchController = async (req, res)=>{
    let email = req.params.email;
    let {otp} = req.body
    let OtpMatchFind = await UserModel.find({email})
    if(OtpMatchFind.length > 0){
        if(otp == OtpMatchFind[0].otp){
            await UserModel.findOneAndUpdate(
                {email},
                {$set: {otp:""}},
                {new: true}  
            )
            res.json({status:"success", message:"Otp match"})
        }else{
            res.json({error: "Otp not match"})

        }
    }
}
module.exports = OtpMatchController