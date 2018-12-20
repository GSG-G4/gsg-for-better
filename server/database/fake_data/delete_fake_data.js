const Technology = require('../models/technology');
const User = require('../models/user');

const resetFakeData = async () => {
  await Technology.deleteMany();
  await User.deleteMany();
};

module.exports = resetFakeData;
