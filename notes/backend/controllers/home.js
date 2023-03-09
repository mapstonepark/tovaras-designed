module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getProfile:(req, res)=>{
        res.render('contactProfile.ejs')
    }
}

// Should this render our react project? Server side is all about pulling the information through right so display here is more for confirmation right?