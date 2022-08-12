const Match = require("../../models/match")

module.exports = {
    index,
    create,
}

async function index(req, res) {
    const match = await Match.find({})
    res.json(match)
}

async function create(req, res) {
    const match = await Match.create(req.body)
    console.log("HERE IS CONTROLLER FOR MATCH", match)
    res.json(match)
}