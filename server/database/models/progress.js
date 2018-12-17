const { model, Schema } = require('mongoose');

// Progress Schema
// Defines how to store each memeber progress against each goal

const ProgressSchema = new Schema({
  status: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  goal: {
    type: Schema.Types.ObjectId,
    ref: 'goals',
  },
});

module.exports = Progress = model('progresses', ProgressSchema);
