const Progress = require('../models/progress');
const User = require('../models/user');
const Goal = require('../models/goal');

const goalId = async (goalDescription) => {
  const goal = await Goal.findOne({ description: goalDescription });
  return goal.id;
};
const userId = async (handler) => {
  const user = await User.findOne({ githubHandler: handler });
  return user.id;
};

module.exports = () => new Promise(async (resolve) => {
  const expressGoalId = await goalId('master express');
  const middlewareGoalId = await goalId('understand middleware');
  const farahId = await userId('FarahZaqout');
  const ahmadId = await userId('ashatat');
  const AbdId = await userId('amusameh');
  const bigId = await userId('RamyAlshurafa');

  const progressArray = [
    {
      status: 'Done',
      user: farahId,
      goal: expressGoalId,
    },
    {
      status: 'Done',
      user: farahId,
      goal: middlewareGoalId,
    },
    {
      status: 'Done',
      user: bigId,
      goal: middlewareGoalId,
    },
    {
      status: 'Done',
      user: bigId,
      goal: expressGoalId,
    },
    {
      status: 'Done',
      user: ahmadId,
      goal: expressGoalId,
    },
    {
      status: 'Done',
      user: AbdId,
      goal: expressGoalId,
    },
  ];
  await Progress.insertMany(progressArray);
  resolve();
});
