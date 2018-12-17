const mongoose = require('mongoose');

const { model, Schema } = mongoose;

// Comment Schema
// Defines how to store Comments on each tech from guests(mentors) and replies to them

const CommentSchema = new Schema({
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subComments: [{
    _id: { default: mongoose.Types.ObjectId(), type: Schema.Types.ObjectId },
    description: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  technology: {
    type: Schema.Types.ObjectId,
    ref: 'technologies',
  },
});

const Comment = model('comments', CommentSchema);
module.exports = Comment;
