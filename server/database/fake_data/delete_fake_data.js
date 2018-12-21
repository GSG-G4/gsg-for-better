const Technology = require('../models/technology');
const Team = require('../models/team');
const User = require('../models/user');
const Comment = require('../models/comment');
const proposedGoal = require('../models/proposed_goal');
const Goal = require('../models/goal');
const Progress = require('../models/progress');

const resetFakeData = async () => {
  await Technology.deleteMany();
  await Team.deleteMany();
  await Goal.deleteMany();
  await User.deleteMany();
  await Comment.deleteMany();
  await proposedGoal.deleteMany();
  await Progress.deleteMany();
};

module.exports = resetFakeData;
