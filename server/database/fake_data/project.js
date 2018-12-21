const Project = require('../models/project');
const Goal = require('../models/goal');
const Technology = require('../models/technology');
const Progress = require('../models/progress');
const Team = require('../models/team');

// githubLink: String,
// projectSite: String,
// projectStatus: String,
// previewImage: String,
// description: String,
// technologies: array
// goals: array
// team: id;

// retrieves goals that have a progress status of not done, and a certain tech (based on tech name);

// query should take tech name, find all goals with not-done status and that tech id

// get teamId based on teamName


// gets all goals with in progress status based on tech name
const relevantGoals = async (techName, goalStatus) => {
  const techId = await Technology.find({ name: techName });
  const statusOfNotDone = await Progress.find({ status: goalStatus })
    .populate({
      path: 'goals', // specifies schema to pull values from.
      match: { technology: techId }, // which value to look for.
      select: 'technology', // which key to select in the document object.
    });
  const setOfGoalIds = () => {
    const arrayOfGoals = statusOfNotDone.map(element => element.goal);
    const uniqueIds = {};
    arrayOfGoals.filter(element => uniqueIds[element] = element);
    const arrayOfUniqueIds = Object.keys(uniqueIds);
    return arrayOfUniqueIds;
  };
  return setOfGoalIds();
};

module.exports = relevantGoals;
