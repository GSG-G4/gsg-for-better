const Technology = require('../models/technology');
const Team = require('../models/team');
const User = require('../models/user');
const proposedGoal = require('../models/proposed_goal');

const resetFakeData = async () => {
  await Technology.deleteMany();
  await Team.deleteMany();
  await User.deleteMany();
  await proposedGoal.deleteMany();
};

module.exports = resetFakeData;
