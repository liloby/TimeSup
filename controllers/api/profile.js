const Profile = require('../../models/profile')

module.exports = {
    index,
    create
}

async function index(req, res) {
    const profile = await Profile.find({})
    res.json(profile)
}

async function create(req, res) {
    const profile = await Profile.create(req.body)
    console.log("You've reach controller")
    res.json(profile)
}