const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const Team = require('../../database/models/team');

describe('testing for Team schema', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('Team schema must be defined', async () => {
    // Team schema must be defined
    expect(Team).toBeDefined();

    // find all teams
    const teams = await Team.find({});

    // expect to get array of object
    expect(teams).toBeDefined();
    expect(Array.isArray(teams)).toBeTruthy();

    // expect to get array of techonologies
    expect(teams[0].technologies).toBeDefined();
    expect(Array.isArray(teams[0].technologies)).toBeTruthy();
    expect(teams[0].technologies.length).toBe(5);

    // expect to get 3 teams [G4-AFAR, ILA, KMA]
    expect(teams.length).toBe(3);

    // testing for collections names
    expect(teams[0]).toMatchObject({ name: 'G4-AFAR' });
    expect(teams[1]).toMatchObject({ name: 'ILA' });
    expect(teams[2]).toMatchObject({ name: 'KMA' });
  });
});
