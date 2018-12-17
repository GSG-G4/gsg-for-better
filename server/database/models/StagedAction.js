const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// StagedAction Schema
// Defines how to store stagedActions from members against proposedGoals and projects (edit, delete)

const StagedActionSchema = new Schema({
  action: String,
  description: {},
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'users',
  }],
  category: {
    type: String,
    enum: ['goals', 'projects'],
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    refPath: 'category',
  }
});

module.exports = StagedAction = mongoose.model('stagedactions', StagedActionSchema);
