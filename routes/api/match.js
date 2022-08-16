const express = require('express')
const router = express.Router()
const matchCtrl = require('../../controllers/api/match')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// router.get('/', matchCtrl.index)
router.get('/', matchCtrl.index)
router.get('/matches', matchCtrl.findMatch)
router.get('/matches/profiles', matchCtrl.findMatchProfile)
router.post('/new', ensureLoggedIn, matchCtrl.create)
router.post('/:id', matchCtrl.detail)
router.post('/message/new', ensureLoggedIn, matchCtrl.addMessage)




module.exports = router;