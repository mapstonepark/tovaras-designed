const express = require('express')
const router = express.Router()
const profilesController = require('../controllers/profile') 


router.get('/',  profilesController.getProfiles)

router.get('/:id', profilesController.contactProfile)

module.exports = router;