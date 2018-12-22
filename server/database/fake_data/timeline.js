const Timeline = require('../models/timeline');
const Goal = require('../models/goal');
const Team = require('../models/team');

// startDate: {
//   type: Date,
//   required: true,
// },
// team: {
//   type: Schema.Types.ObjectId,
//   ref: 'teams',
// },
// goals: [{
//   type: Schema.Types.ObjectId,
//   ref: 'goals',
// }],

const teamId = async (teamName) => {
  const team = await Team.find({ name: teamName });
  return team.id;
};

const goalId = async (goalDescription) => {
  const goal = await Goal.find({ description: goalDescription });
  return goal.id;
};

module.exports = async () => {
  const G4team = await teamId('G4-AFAR');
  const firstGoal = await goalId('master express');
  const secondGoal = await goalId('understand subapplications');
  const thirdGoal = await goalId('understand middleware');
  const fourthGoal = await goalId('know security practices');

  const weeks = [
    {
      startDate: new Date('2018-11-10T12:10:00'),
      team: G4team,
      goals: [firstGoal, secondGoal, thirdGoal, fourthGoal],
    },
    {
      startDate: new Date('2018-12-10T12:10:00'),
      team: G4team,
      goals: [firstGoal, secondGoal],
    },
    {
      startDate: new Date('2018-11-27T12:10:00'),
      team: G4team,
      goals: [firstGoal, secondGoal, thirdGoal],
    },
    {
      startDate: new Date('2018-11-10T12:10:00'),
      team: G4team,
      goals: [firstGoal, secondGoal, fourthGoal],
    },
  ];
  await Timeline.insertMany(weeks);
};
