const User = require('../models/user');

// Get Team Id by team's name
const getTeamId = async (teamName) => {
  const team = await User.findOne({ name: teamName });
  // eslint-disable-next-line no-underscore-dangle
  return team._id;
};

const insertUsers = () => new Promise(async (resolve) => {
  // Get the first team Id
  const team1ID = getTeamId('G4-AFAR');

  // first team members
  const team1Members = [
    {
      githubHandler: 'RamyAlshurafa',
      email: 'ramyshurafa@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars3.githubusercontent.com/u/34629478?s=460&v=4',
      team: team1ID,
    },
    {
      githubHandler: 'ashatat',
      email: 'a.shatat@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars1.githubusercontent.com/u/18149438?s=460&v=4',
      team: team1ID,
    },
    {
      githubHandler: 'FarahZaqout',
      email: 'farah.zaqout@gmail.com',
      role: 'member',
      profileImage: 'https://avatars1.githubusercontent.com/u/25854070?s=400&v=4',
      team: team1ID,
    },
    {
      githubHandler: 'FarahZaqout',
      email: 'farah.zaqout@gmail.com',
      role: 'member',
      profileImage: 'https://avatars1.githubusercontent.com/u/25854070?s=400&v=4',
      team: team1ID,
    },
  ];

  await User.insertMany(team1Members);

  // Get second team Id
  const team2ID = getTeamId('ILA');

  // Second team members
  const team2Members = [
    {
      githubHandler: 'ali-7',
      email: 'ali-7@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars0.githubusercontent.com/u/36124895?s=460&v=4',
      team: team2ID,
    },
    {
      githubHandler: 'lubnaabd',
      email: 'lubnaabd@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars1.githubusercontent.com/u/26024284?s=460&v=4',
      team: team2ID,
    },
    {
      githubHandler: 'HemaSAli',
      email: 'HemaSAli@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars3.githubusercontent.com/u/34215823?s=460&v=4',
      team: team2ID,
    },
  ];

  await User.insertMany(team2Members);

  // add guest user
  const guest = {
    githubHandler: 'ishak52',
    email: 'ishak52@hotmail.com',
    role: 'guest',
    profileImage: 'https://avatars0.githubusercontent.com/u/34238574?s=460&v=4',
    team: team2ID,
  };

  await User.insert(guest);

  // add admin user
  const admin = {
    githubHandler: 'MohammedYehia',
    email: 'MohammedYehia@hotmail.com',
    role: 'admin',
    profileImage: 'https://avatars0.githubusercontent.com/u/7594617?s=460&v=4',
    team: team2ID,
  };
  await User.insert(admin);

  resolve();
});

module.exports = insertUsers;
