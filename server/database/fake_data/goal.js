const Goal = require('../models/goal');
const Technology = require('../models/technology');


const technologyId = async (techName) => {
  const technology = await Technology.findOne({ name: techName });
  return technology;
};

module.exports = () => new Promise(async (resolve) => {
  const expressId = await technologyId('express');
  const nodeId = await technologyId('node');
  const goals = [
    {
      description: 'master express',
      technology: expressId,
    },
    {
      description: 'understand subapplications',
      technology: expressId,
    },
    {
      description: 'understand middleware',
      technology: expressId,
    },
    {
      description: 'know security practices',
      technology: expressId,
    },
    {
      description: 'understand i/o',
      technology: nodeId,
    },
    {
      description: 'understand concurrency and multi-threading',
      technology: nodeId,
    },
    {
      description: 'learn generator functions',
      technology: nodeId,
    },
  ];

  await Goal.insertMany(goals);
  resolve();
});
