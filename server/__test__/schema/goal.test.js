const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const Goal = require('../../database/models/goal');

describe('testing the goal model', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('goals schema must be defined', async () => {
    expect(Goal).toBeDefined();

    // find all goals
    const goals = await Goal.find({});
    expect(goals).toBeDefined();

    // expect to get array of goals
    expect(Array.isArray(goals)).toBeTruthy();
    expect(goals.length).toBe(7);

    // expect descriptions to be strings.
    expect(goals[0].description).toBe('master express');
    expect(goals[5].description).toBe('understand concurrency and multi-threading');
  });
});
