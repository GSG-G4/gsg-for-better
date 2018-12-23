const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const Timeline = require('../../database/models/timeline');

describe('testing the timeline schema', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('timeline model interacts as intended', async () => {
    // timeline schema must be defined
    expect(Timeline).toBeDefined();

    // find all timelines
    const timelines = await Timeline.find({});

    // expect to get array of object
    expect(timelines).toBeDefined();
    expect(Array.isArray(timelines)).toBeTruthy();

    // expect to get 4 timelines
    expect(timelines.length).toBe(4);
    expect(timelines[0].goals.length).toBe(4);
    expect(timelines[1].goals.length).toBe(2);

    // checks if startDate is a type date string.
    expect(typeof Date.parse(timelines[2].startDate)).toBe('number');

  });
});
