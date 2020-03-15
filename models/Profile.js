const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  // Create a reference to the User model since every profile is associated with a user
  user: {
    type: mongoose.Schema.Types.ObjectId, // Associates with the _id from the User Schema
    ref: 'user'
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    require: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  }
});
