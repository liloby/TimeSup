const Match = require("../../models/match")
const Profile = require('../../models/profile')

module.exports = {
    index,
    create,
    findMatch,
    findMatchProfile,
}

async function index(req, res) {
    const match = await Match.find({})
    res.json(match)
}

async function create(req, res) {
    const match = await Match.create(req.body)
    // console.log("HERE IS CONTROLLER FOR MATCH", match)
    res.json(match)
}

async function findMatch(req, res) {
    // console.log(req.user._id, "REQ.user.ID!!!!")
    const myMatches = await Match.find({$or: [{user1: req.user._id}, {user2: req.user._id}]})
    res.json(myMatches)
}

async function findMatchProfile(req, res) {
    const profile = await Profile.findOne({user: req.user._id})
    // console.log(profile,"THIS IS MY OWN PROFILE")
    const matchedProfiles = await Profile.find({"profileMatches.name": profile.displayName})
    res.json(matchedProfiles)
}
