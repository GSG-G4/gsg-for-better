const Technology = require('../models/technology');

const resetFakeData = async () => {
  await Technology.deleteMany();
};

module.exports = resetFakeData;
