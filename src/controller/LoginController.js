const bcrypt = require('bcrypt');
const emailVelidation = require("../helpers/emailVelidation.js")
const UserModel = require("../model/UserModel.js")
const { EncodeToken } = require("../helpers/tokenHelper.js");

let loginController = async (req, res)=>{
    
    let {email, password} = req.body
    if(!email){
        res.send({error: "Please Enter Your Email"})
    }else if(!emailVelidation(email)){
        res.send({error: "Please Enter Your Valid Email"})
    }else if(!password){
        res.send({error: "Please Enter The Password"})
    }else{

        let EmailExist = await UserModel.find({email})
        if(EmailExist.length > 0){

            let user_id = await UserModel.find({email}).select('_id name phone')

            // User Token Create
            //let token = EncodeToken(email, user_id[0]['_id'].toString())

            // set cookie
            let id = user_id[0]
            //res.cookie('token',token)
            
            bcrypt.compare(password, EmailExist[0].password).then(function(result) {
                if(result){
                    res.send({
                        status:"success",email: email, user_id:id})
                }else{
                    res.send({"error":"password is not matching"})
                }
            });
        }else{
            res.send({"error":"Email is not matching"})
        }
    }
}

module.exports = loginController