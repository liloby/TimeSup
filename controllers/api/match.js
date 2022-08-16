const Match = require("../../models/match")
const Profile = require('../../models/profile')

module.exports = {
    index,
    create,
    findMatch,
    findMatchProfile,
    detail,
    addMessage,
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

async function detail(req, res) {
    const match = await Match.findOne({_id: req.body.matchId})
    const myProfile = await Profile.findOne({user: req.user._id})
    const filteredProfiles = await Profile.find({"profileMatches.name": myProfile.displayName})
    res.json({match, myProfile, filteredProfiles})
}

async function addMessage(req, res) {
    const match = await Match.findOne({_id: req.body.matchId})
    const myProfile = await Profile.findOne({user: req.user._id})
    req.body.user = myProfile._id
    req.body.content = req.body.content
    const newReqBody = {user: req.body.user, content: req.body.content}
    match.chat.push(newReqBody)
    match.save()
    res.json({myProfile, match})
}

