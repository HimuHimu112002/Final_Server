const bcrypt = require('bcrypt');
const UserModel = require("../model/UserModel.js")
const emailVelidation = require("../helpers/emailVelidation.js")
const emailSend = require("../helpers/emailSend.js");
const mobileVelidation = require('../helpers/mobileNumberValidation.js');
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

let registrationController =  async (req, res)=>{
    const {name, phone, email, password} = req.body
    if(!name){
        res.send({error: "Please Enter Your Fullname"})
    }else if(!mobileVelidation(phone)){
        res.send({error: "Please Enter Your valid phone number"})
    }else if(!emailVelidation(email)){
        res.send({error: "Please enter the valid email"})
    }else if(!password){
        res.send({error: "Please Enter The Password"})
    }
    else {
        let duplicateEmail = await UserModel.find({email: email})
        if(duplicateEmail.length > 0){
            return res.send({error: "This email already in used. Try another email"})
        }
        bcrypt.hash(password, 10, async function(err, hash) {
            const generator2 = aleaRNGFactory(Date.now());
            let OtpNumber = generator2.uInt32().toString().substring(0, 6)
            let user = new UserModel({
                name: name,
                phone: phone,
                email: email,
                password: hash,
                otp:OtpNumber,
            })
            user.save()
            emailSend(email, OtpNumber)
            res.send({status:"success", message:"6 Digit OTP has been send"})
        });
        
    }

}

module.exports = registrationController;