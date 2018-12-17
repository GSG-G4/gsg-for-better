const { model, Schema } = require('mongoose');

// Comment Schema
// Defines how to store Comments on each tech from guests(mentors) and replies to them

const CommentSchema = new Schema({
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subComments: [{
    description: String,
    createdAt: {
      type: Date,
      default: Date.now,
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

module.exports = Comment = model('comments', CommentSchema);
