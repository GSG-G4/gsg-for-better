const Technology = require('../models/technology');
const Team = require('../models/team');
const Goal = require('../models/goal');

const resetFakeData = async () => {
  await Technology.deleteMany();
  await Team.deleteMany();
  await Goal.deleteMany();
};

module.exports = resetFakeData;
