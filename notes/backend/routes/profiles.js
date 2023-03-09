const express = require('express')
const router = express.Router()
const profilesController = require('../controllers/profile') 
const { ensureAuth } = require('../middleware/auth')

router.get('/contactProfile', ensureAuth, profilesController.getProfiles)

module.exports = router;