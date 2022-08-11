const Profile = require('../../models/profile')

module.exports = {
    index,
    create,
    addLike,
    update
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
    console.log("YOU'RE HERE ATLEAST")
    profile[0].likes.push(req.body)
    profile[0].save()
    res.json(profile)
}

async function update(req, res) {
    const profile = await Profile.findOneAndUpdate({user: req.user._id}, req.body)
    res.json(profile)
}