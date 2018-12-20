const Technology = require('../models/technology');
const Team = require('../models/team');

const resetFakeData = async () => {
  await Technology.deleteMany();
  await Team.deleteMany();
};

module.exports = resetFakeData;
