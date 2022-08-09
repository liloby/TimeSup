const express = require('express')
const router = express.Router()
const profileCtrl = require('../../controllers/api/profile')

router.get('/', profileCtrl.index)

module.exports = router;