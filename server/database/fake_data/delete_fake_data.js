const Technology = require('../models/technology');
const Goal = require('../models/goal');

const resetFakeData = async () => {
  await Technology.deleteMany();
  await Goal.deleteMany();
};

module.exports = resetFakeData;
