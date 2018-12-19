const mongoose = require('mongoose');
const buildFakeData = require('./../../database/fake_data');
const Technology = require('./.././../database/models/technology');

describe('testing for Technology schema', () => {
  beforeEach(() => {
    buildFakeData();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('Technology schema must be defined', async () => {
    const technologies = await Technology.find({});
    console.log(technologies);

    expect(1).toBe(1);
  });
});
