const Contact = require('../models/Contact')

module.exports = {
    getProfiles: async (req,res)=>{
        console.log(req.user)
        try{
            const contactItems = await Contact.find({userId:req.user.id})
            const itemsLeft = await Contact.countDocuments({userId:req.user.id,completed: false})
            res.render('contactProfile.ejs', {contacts: contactItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    }
}


