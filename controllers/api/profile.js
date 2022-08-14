const Profile = require('../../models/profile')
const User = require('../../models/user')

module.exports = {
    index,
    getCurrentProfile,
    create,
    addLike,
    update,
    delete: deleteProfile,
    addMatch,
    addMatch2
}


async function getCurrentProfile(req, res) {
    const profile = await Profile.find({user: req.user._id})
    res.json(profile)
}


async function index(req, res) {
    const profile = await Profile.find({})
    res.json(profile)
}

async function create(req, res) {
    const profile = await Profile.create(req.body)
    const user = await User.findOneAndUpdate({_id: req.user._id}, {profileCreated: true})
    user.save()
    console.log("Created profile Change user boolean to true", user)
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

async function deleteProfile(req, res) {
    const profile = await Profile.findOneAndDelete({user: req.user._id})
    const user = await User.findOneAndUpdate({_id: req.user._id}, {profileCreated: false})
    user.save()
    res.json(profile)
}

async function addMatch(req, res) {
    console.log("REQ BODY DISPLAY NAME", req.body.displayName)
    const profile = await Profile.find({user: req.user._id})
    profile[0].profileMatches.push({name: req.body.displayName})
    profile[0].save()
    res.json(profile)
}

async function addMatch2(req, res) {
    const profile1 = await Profile.find({user: req.user._id})
    console.log(profile1, "PROFILE1 INFO!!!!!!!!!!!!!")
    const profile2 = await Profile.find(req.body)
    console.log("THIS IS FOUND PROFILE 2", profile2)
    profile2[0].profileMatches.push({name: profile1[0].displayName})
    profile2[0].save()
    res.json(profile2)
}
