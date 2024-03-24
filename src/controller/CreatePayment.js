const paymentsettings = require('../model/PamentSettingModel')
let PaymentCreate = async (req, res)=>{
    let {store_id,
        store_passwd,
        currency,
        success_url,
        fail_url,
        cancel_url,
        ipn_url,
        init_url} = req.body
        let payment = new paymentsettings({
            store_id,
            store_passwd,
            currency,
            success_url,
            fail_url,
            cancel_url,
            ipn_url,
            init_url
        })
        payment.save()
        res.send({status:"success", message:"payment Create Success"})
    
}
module.exports = {PaymentCreate}