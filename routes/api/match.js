const express = require('express')
const router = express.Router()
const matchCtrl = require('../../controllers/api/match')

// router.get('/', matchCtrl.index)
router.get('/', matchCtrl.index)
router.post('/new', matchCtrl.create)



module.exports = router;