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
    },
    createProfile: async (req,res)=>{
        console.log(req.user)
        try{
            const contactItems = await Contact.find({userId:req.user.id})
            const itemsLeft = await Contact.countDocuments({userId:req.user.id,completed: false})
            res.render('newContact.ejs', {contacts: contactItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    contactProfile: async (req,res)=>{
        console.log('Contact Profile was clicked!')
        try{
            const contact = await Contact.findById("req.params.id")
            const contactItems = await Contact.find({userId:req.user.id})
            const itemsLeft = await Contact.countDocuments({userId:req.user.id,completed: false})
            res.render('contactProfile.ejs', {contact: contact})
        }catch(err){
            console.log(err)
        }
    },
}


