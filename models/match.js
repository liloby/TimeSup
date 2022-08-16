const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Profile', required: true},
    content: {type: String, required: true},
}, {
    timestamps: true
})

const matchSchema = new Schema({
    user1: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    user2: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    chat: [chatSchema],
    expiration: { type: Date, default: () => new Date(+new Date() + (7*24*60*60*1000))}
}, {
    timestamps: true,
})


module.exports = mongoose.model('Match', matchSchema)