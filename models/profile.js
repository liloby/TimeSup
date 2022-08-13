const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likesSchema = new Schema({
    name: String
  })

const profileMatchesSchema = new Schema({
    name: String,
})
  
  const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    displayName: {
      type: String,
    },
    age: Number,
    sex: {
        type: String,
        enum: ["Man", "Woman", "Trans", "Non-binary", "Other"],
        required: true
    },
    image: String,
    bio: String,
    hobbies: String,
    likes: [likesSchema],
    profileMatches: [profileMatchesSchema] 
  }, {
    timestamps: true,
  })


  module.exports = mongoose.model('Profile', profileSchema)