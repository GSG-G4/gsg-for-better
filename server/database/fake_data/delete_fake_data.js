const Technology = require('../models/technology');
const Team = require('../models/team');
const User = require('../models/user');
const proposedGoal = require('../models/proposed_goal');
const Goal = require('../models/goal');
const Progress = require('../models/progress');
<<<<<<< HEAD
<<<<<<< HEAD
const Timeline = require('../models/timeline');
=======
const Project = require('../models/project');
>>>>>>> 258a0b0cde6dd7d283ad5bb29cde164daca67358
=======
const Project = require('../models/project');
>>>>>>> 258a0b0cde6dd7d283ad5bb29cde164daca67358

const resetFakeData = async () => {
  await Technology.deleteMany();
  await Team.deleteMany();
  await Goal.deleteMany();
  await User.deleteMany();
  await proposedGoal.deleteMany();
  await Progress.deleteMany();
<<<<<<< HEAD
<<<<<<< HEAD
  await Timeline.deleteMany();
=======
  await Project.deleteMany();
>>>>>>> 258a0b0cde6dd7d283ad5bb29cde164daca67358
=======
  await Project.deleteMany();
>>>>>>> 258a0b0cde6dd7d283ad5bb29cde164daca67358
};

module.exports = resetFakeData;
