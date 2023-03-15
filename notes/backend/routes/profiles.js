const express = require('express')
const router = express.Router()
const profilesController = require('../controllers/profile') 


router.get('/',  profilesController.getProfiles)

module.exports = router;