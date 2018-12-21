const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const ProposedGoal = require('../../database/models/proposed_goal');

describe('testing for ProposedGoal schema', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('ProposedGoal schema must be defined', async () => {
    // ProposedGoal schema must be defined
    expect(ProposedGoal).toBeDefined();

    // find all proposedGoals
    const proposedGoals = await ProposedGoal.find({});

    // expect to get array of object
    expect(proposedGoals).toBeDefined();
    expect(Array.isArray(proposedGoals)).toBeTruthy();

    // expect to get 4 proposedGoals
    expect(proposedGoals.length).toBe(4);

    // expect to get 4 users on the first proposedGoals
    expect(proposedGoals[0].users).toBeDefined();
    expect(Array.isArray(proposedGoals[0].users)).toBeTruthy();
    expect(proposedGoals[0].users.length).toBe(4);

    // testing for collections description
    expect(proposedGoals[0]).toMatchObject({ description: 'best way to use jest for testing' });
    expect(proposedGoals[1]).toMatchObject({ description: 'express middewares' });
    expect(proposedGoals[2]).toMatchObject({ description: 'mongodb populate many collections' });
    expect(proposedGoals[3]).toMatchObject({ description: 'aws deployment' });
  });
});
