/* eslint-disable no-underscore-dangle */
const User = require('../models/user');
const Team = require('../models/team');


// Get Team Id by team's name
const getTeam = (teamName) => {
  const team = Team.findOne({ name: teamName });
  return team;
};


const insertUsers = () => new Promise(async (resolve) => {
  // Get the first team
  const team1 = await getTeam('G4-AFAR');

  // first team members
  const team1Members = [
    {
      name: 'Ramy Al Shurafa',
      githubHandler: 'RamyAlshurafa',
      email: 'ramyshurafa@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars3.githubusercontent.com/u/34629478?s=460&v=4',
      team: team1,
      specialty: 'full-stack web developer',
    },
    {
      name: 'Ahmed Shatat',
      githubHandler: 'ashatat',
      email: 'a.shatat@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars1.githubusercontent.com/u/18149438?s=460&v=4',
      team: team1,
      specialty: 'full-stack web developer',
    },
    {
      name: 'Farah Zaqout',
      githubHandler: 'FarahZaqout',
      email: 'farah.zaqout@gmail.com',
      role: 'member',
      profileImage: 'https://avatars1.githubusercontent.com/u/25854070?s=400&v=4',
      team: team1,
      specialty: 'full-stack web developer',
    },
    {
      name: 'AbdAlsamad Abu Musameh',
      githubHandler: 'amusameh',
      email: 'abdalsamad.y.m@gmail.com',
      role: 'member',
      profileImage: 'https://avatars3.githubusercontent.com/u/28042978?s=400&v=4',
      team: team1,
      specialty: 'full-stack web developer',
    },
  ];

  await User.insertMany(team1Members);


  // Get second team
  const team2 = await getTeam('ILA');

  // Second team members
  const team2Members = [
    {
      githubHandler: 'ali-7',
      email: 'ali-7@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars0.githubusercontent.com/u/36124895?s=460&v=4',
      team: team2,
      specialty: 'full-stack web developer',
    },
    {
      githubHandler: 'lubnaabd',
      email: 'lubnaabd@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars1.githubusercontent.com/u/26024284?s=460&v=4',
      team: team2,
      specialty: 'full-stack web developer',
    },
    {
      githubHandler: 'HemaSAli',
      email: 'HemaSAli@hotmail.com',
      role: 'member',
      profileImage: 'https://avatars3.githubusercontent.com/u/34215823?s=460&v=4',
      team: team2,
      specialty: 'full-stack web developer',
    },
  ];

  await User.insertMany(team2Members);


  // add guest user
  const guest = {
    githubHandler: 'ishak52',
    email: 'ishak52@hotmail.com',
    role: 'guest',
    profileImage: 'https://avatars0.githubusercontent.com/u/34238574?s=460&v=4',
    specialty: 'full-stack web developer',
  };

  await User.create(guest);


  // add admin user
  const admin = {
    githubHandler: 'MohammedYehia',
    email: 'MohammedYehia@hotmail.com',
    role: 'admin',
    profileImage: 'https://avatars0.githubusercontent.com/u/7594617?s=460&v=4',
    specialty: 'full-stack web developer',
  };

  await User.create(admin);

  resolve();
});

module.exports = insertUsers;
