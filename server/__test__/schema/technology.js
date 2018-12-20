const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const Technology = require('../../database/models/technology');

describe('testing for Technology schema', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('Technology schema must be defined', async () => {
    // Technology schema must be defined
    expect(Technology).toBeDefined();

    // find all technologies
    const technologies = await Technology.find({});

    // expect to get array of object
    expect(technologies).toBeDefined();
    expect(Array.isArray(technologies)).toBeTruthy();

    // expect to get 5 technologies [express, mongodb, react, node, devops]
    expect(technologies.length).toBe(5);

    // testing for collections names
    expect(technologies[0]).toMatchObject({ name: 'express' });
    expect(technologies[1]).toMatchObject({ name: 'mongodb' });
    expect(technologies[2]).toMatchObject({ name: 'react' });
    expect(technologies[3]).toMatchObject({ name: 'node' });
    expect(technologies[4]).toMatchObject({ name: 'devops' });
  });
});
