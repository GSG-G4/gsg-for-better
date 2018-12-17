const { model, Schema } = require('mongoose');

// ProposedGoal Schema
// Defines how to store proposedGoals that the team members suggest

const ProposedGoalSchema = new Schema({
  description: String,
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'users',
  }],
});

const ProposedGoal = model('proposedGoals', ProposedGoalSchema);
module.exports = ProposedGoal;
