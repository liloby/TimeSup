const Profile = require('../../models/profile')

module.exports = {
    index,
}

async function index(req, res) {
    const profile = await Profile.find({})
    res.json(profile)
}