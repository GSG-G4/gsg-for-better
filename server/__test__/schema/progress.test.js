const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const Progress = require('../../database/models/progress');

describe('testing progress model', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('Progress schema interacts as intended', async () => {
    const progress = await Progress.find({});
    expect(progress).toBeDefined();

    // progress has 6 entries
    expect(progress.length).toBe(6);
    expect(progress[0].status).toBe('Not Done');
  });
});
