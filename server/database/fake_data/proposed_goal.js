const ProposedGoal = require('../models/proposed_goal');
const User = require('../models/user');
const Team = require('../models/team');

module.exports = async () => {
  const team = await Team.findOne({ name: 'G4-AFAR' });
  const users = await User.find({ team: team.id });
  const usersArr = users.map(user => user.id);
  const twoUsers = usersArr.filter((user, index) => index <= usersArr.length / 2);

  const proposedGoals = [
    {
      description: 'best way to use jest for testing',
      users: usersArr,
    },
    {
      description: 'express middewares',
      users: usersArr,
    },
    {
      description: 'mongodb populate many collections',
      users: twoUsers,
    },
    {
      description: 'aws deployment',
      users: twoUsers,
    },
  ];

  return ProposedGoal.insertMany(proposedGoals);
};
