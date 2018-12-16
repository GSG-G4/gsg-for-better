const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
// Defines how to store users info that mostly should come from github

const UserSchema = new Schema({
  githubHandler: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'guest',
  },
  profileImage: String,
  teamId: {
    type: Schema.Types.ObjectId,
    ref: 'teams',
  }
});

module.exports = User = mongoose.model('users', UserSchema);
