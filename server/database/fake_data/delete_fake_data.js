const Technology = require('../models/technology');
const Team = require('../models/team');
const User = require('../models/user');
const proposedGoal = require('../models/proposed_goal');
const Goal = require('../models/goal');
const Progress = require('../models/progress');
const Timeline = require('../models/timeline');

const resetFakeData = async () => {
  await Technology.deleteMany();
  await Team.deleteMany();
  await Goal.deleteMany();
  await User.deleteMany();
  await proposedGoal.deleteMany();
  await Progress.deleteMany();
  await Timeline.deleteMany();
};

module.exports = resetFakeData;
