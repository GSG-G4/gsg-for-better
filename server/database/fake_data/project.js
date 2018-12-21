const Project = require('../models/project');
const Technology = require('../models/technology');
const Progress = require('../models/progress');
const Team = require('../models/team');

// get teamId based on teamName
const teamInfo = async (teamName) => {
  const { id, technologies } = await Team.findOne({ name: teamName });
  const teamData = { id, technologies };
  return teamData;
};

// takes a tech name, find all goals with not-done status for that tech as well as the tech.id
const relevantGoals = async (techName) => {
  const techId = await Technology.findOne({ name: techName });
  const GoalsNotDone = await Progress.find({ status: 'Not Done' })
    .populate({
      path: 'goals', // specifies schema to pull values from.
      match: { technology: techId.id }, // which value to look for.
      select: 'technology', // which key to select in the document object.
    });
  const setOfGoalIds = () => {
    const arrayOfGoals = GoalsNotDone.map(element => element.goal);
    const uniqueIds = {};
    arrayOfGoals.filter((element) => {
      uniqueIds[element] = element;
      return null;
    });
    const arrayOfUniqueIds = Object.keys(uniqueIds);
    return arrayOfUniqueIds;
  };
  return setOfGoalIds();
};

module.exports = async () => {
  const teamG4 = await teamInfo('G4-AFAR');
  const { id, technologies } = teamG4;
  const relevant = await relevantGoals('express');

  const projects = [
    {
      githubLink: 'githublink',
      projectSite: 'project site',
      projectStatus: 'Done',
      previewImage: 'previewImage',
      description: 'firstProject',
      technologies,
      team: id,
      goals: relevant,
    },
    {
      githubLink: 'githublink',
      projectSite: 'project site',
      projectStatus: 'Done',
      previewImage: 'previewImage',
      description: 'secondProject',
      technologies,
      team: id,
      goals: relevant,
    },
    {
      githubLink: 'githublink',
      projectSite: 'project site',
      projectStatus: 'In progress',
      previewImage: 'previewImage',
      description: 'thirdProject',
      technologies,
      team: id,
      goals: relevant,
    },
  ];
  await Project.insertMany(projects);
};
