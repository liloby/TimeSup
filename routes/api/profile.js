const express = require('express')
const router = express.Router()
const profileCtrl = require('../../controllers/api/profile')

router.get('/', profileCtrl.index)
router.post('/like', profileCtrl.addLike)
router.post('/new', profileCtrl.create)
router.post('/add', profileCtrl.addMatch)
router.post('/add2', profileCtrl.addMatch2)
router.put('/edit', profileCtrl.update)
router.delete('/delete', profileCtrl.delete)

module.exports = router;