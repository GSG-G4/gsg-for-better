const Technology = require('../models/technology');
const Team = require('../models/team');
const User = require('../models/user');
const Comment = require('../models/comment');

const resetFakeData = async () => {
  await Technology.deleteMany();
  await Team.deleteMany();
  await User.deleteMany();
  await Comment.deleteMany();
};

module.exports = resetFakeData;
