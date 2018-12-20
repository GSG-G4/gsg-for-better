/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const User = require('../../database/models/user');
const Team = require('../../database/models/team');

// const Technology = require('../../database/models/technology');

describe('testing for User schema', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('test for User collection', async () => {
    // User & Team schema must be defined
    expect(User).toBeDefined();
    expect(Team).toBeDefined();


    // find all users
    const allUsers = await User.find({});

    expect(allUsers).toBeDefined();
    // we have 9 users (4 in G4, 3 in ILA, 1 guest, 1 admin)
    expect(allUsers.length).toBe(9);


    // find first team
    const firstTeam = await Team.findOne({ name: 'G4-AFAR' });

    // find first team members 'G4-AFAR'
    const firstTeamMembers = await User.find({ team: firstTeam });

    expect(firstTeamMembers).toBeDefined();
    expect(firstTeamMembers.length).toBe(4);
    expect(firstTeamMembers[0]).toMatchObject({ githubHandler: 'RamyAlshurafa' });
    expect(firstTeamMembers[1]).toMatchObject({ githubHandler: 'ashatat' });
    expect(firstTeamMembers[2]).toMatchObject({ githubHandler: 'FarahZaqout' });
    expect(firstTeamMembers[3]).toMatchObject({ githubHandler: 'amusameh' });


    // find second team
    const secondTeam = await Team.findOne({ name: 'ILA' });

    // find second team members 'ILA'
    const secondTeamMembers = await User.find({ team: secondTeam });

    expect(secondTeamMembers).toBeDefined();
    expect(secondTeamMembers.length).toBe(3);
    expect(secondTeamMembers[0]).toMatchObject({ githubHandler: 'ali-7' });
    expect(secondTeamMembers[1]).toMatchObject({ githubHandler: 'lubnaabd' });
    expect(secondTeamMembers[2]).toMatchObject({ githubHandler: 'HemaSAli' });


    // find admin user
    const admin = await User.find({ role: 'admin' });

    expect(admin).toBeDefined();
    expect(admin.length).toBe(1);
    expect(admin[0]).toMatchObject({ githubHandler: 'MohammedYehia' });


    // find guest user
    const guest = await User.find({ role: 'guest' });

    expect(guest).toBeDefined();
    expect(guest.length).toBe(1);
    expect(guest[0]).toMatchObject({ githubHandler: 'ishak52' });
  });
});
