const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const Project = require('../../database/models/project');

describe('testing project model', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('project schema interacts as intended', async () => {
    const projects = await Project.find({});
    expect(projects).toBeDefined();
    // progress has 6 entries
    expect(projects.length).toBe(3);
    expect(projects[0].projectStatus).toBe('Done');
    expect(projects[2].projectStatus).toBe('In progress');
    expect(Array.isArray(projects[0].technologies)).toBeTruthy();
    expect(projects[0].technologies.length).toBe(5);
  });
});
