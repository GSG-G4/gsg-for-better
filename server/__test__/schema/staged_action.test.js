const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const StagedAction = require('../../database/models/staged_action');

describe('testing for staged action schema', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('Staged action interacts as intended', async () => {
    // staged action is defined.
    expect(StagedAction).toBeDefined();

    // tests the content of the schema
    const stagedActions = await StagedAction.find({});
    expect(stagedActions).toBeDefined();
    expect(stagedActions.length).toBe(3);
    expect(stagedActions[1].action).toBe('add');
    expect(Array.isArray(stagedActions[0].users)).toBeTruthy();
    expect(stagedActions[2].users.length).toBe(3);
  });
});
