const express = require('express')
const router = express.Router()
const matchCtrl = require('../../controllers/api/match')

// router.get('/', matchCtrl.index)
router.get('/', matchCtrl.index)
router.get('/matches', matchCtrl.findMatch)
router.get('/matches/profiles', matchCtrl.findMatchProfile)
router.post('/new', matchCtrl.create)
router.post('/:id', matchCtrl.detail)




module.exports = router;