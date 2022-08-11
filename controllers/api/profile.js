const Profile = require('../../models/profile')

module.exports = {
    index,
    create,
    addLike
}

async function index(req, res) {
    const profile = await Profile.find({})
    res.json(profile)
}

async function create(req, res) {
    const profile = await Profile.create(req.body)
    // console.log("You've reach controller")
    res.json(profile)
}

async function addLike(req, res) {
    const profile = await Profile.find({user: req.user._id})

    profile[0].likes.push(req.body)
    profile[0].save()
    res.json(profile)
}