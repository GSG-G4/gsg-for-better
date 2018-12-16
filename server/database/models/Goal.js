const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Goal Schema
// Defines how to store Goals info

const GoalSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  technology: {
    type: Schema.Types.ObjectId,
    ref: 'technologies',
  },
});

module.exports = Goal = mongoose.model('goals', GoalSchema);
