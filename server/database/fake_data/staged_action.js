const StagedAction = require('../models/staged_action');
const Goal = require('../models/goal');
const User = require('../models/user');
const Project = require('../models/project');

// finds goal by name then retruns its id
const goalId = async (goalName) => {
  const goal = await Goal.find({ name: goalName });
  return goal.id;
};

const projectId = async (projectDescription) => {
  const project = await Project.find({ description: projectDescription });
  return project.id;
}

const findUsers = async () => {
  const users = await User.find({});
  return users;
};


// inserts fake data.
module.exports = async () => {
  // get 5 users
  const users = await findUsers();
  const firstUser = users[0].id;
  const secondUser = users[1].id;
  const thirdUser = users[2].id;
  const fourthUser = users[3].id;
  const fifthUser = users[4].id;
  // get project ids
  const middleWareId = await goalId('understand middleware');
  const firstProject = await projectId('firstProject');
  const secondProject = await projectId('secondProject');

  // list of staged actions
  const stagedActions = [
    {
      action: 'delete',
      description: {
        suggestion: 'don\'t learn web',
        reason: 'useless concept',
      },
      users: [firstUser, secondUser, thirdUser],
      category: 'goals',
      categoryId: middleWareId,
    },
    {
      action: 'add',
      description: {
        suggestion: 'find another project',
        reason: 'we don\'t learn anything from it',
      },
      users: [firstUser, fourthUser, fifthUser, thirdUser],
      category: 'projects',
      categoryId: firstProject,
    },
    {
      action: 'edit',
      description: {
        suggestion: 'add contact us page',
        reason: 'users need a way to communicate with the admins',
      },
      users: [firstUser, secondUser, thirdUser],
      category: 'projects',
      categoryId: secondProject,
    },
  ];

  await StagedAction.insertMany(stagedActions);
};
