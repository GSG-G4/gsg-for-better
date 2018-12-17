const { model, Schema } = require('mongoose');

// User Schema
// Defines how to store users info that mostly should come from github

const UserSchema = new Schema({
  githubHandler: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    default: 'guest',
  },
  profileImage: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: 'teams',
  },
});

const User = model('users', UserSchema);

module.exports = User;
