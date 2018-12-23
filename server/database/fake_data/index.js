const path = require('path');
const mongoose = require('mongoose');
const debug = require('debug')('database');

const resetFakeData = require('./delete_fake_data');
const technologyFakeData = require('./technology');
const teamFakeData = require('./team');
const goalsData = require('./goal');
const userFakeData = require('./user');
const commentFakeData = require('./comment');
const proposedGoalFakeData = require('./proposed_goal');
const progressData = require('./progress');
const stagedActionData = require('./staged_action');
const projectData = require('./project');
const timelineData = require('./timeline');

require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });
const dbConnection = require('./../db_connection');

const build = () => new Promise((resolve, reject) => {
  dbConnection()
    .then(async () => {
      await resetFakeData();
      await technologyFakeData();
      await teamFakeData();
      await userFakeData();
      await commentFakeData();
      await proposedGoalFakeData();
      await goalsData();
      await progressData();
      await stagedActionData();
      await projectData();
      await timelineData();
    })
    .then(resolve)
    .catch((err) => {
      debug(`Error with connection with inserting fake data: \n ${err}`);
      reject(err);
    });
});

if (process.env.NODE_ENV !== 'test') {
  build()
    .then(() => {
      debug('Done!: database has been built');
      mongoose.disconnect();
    });
}

module.exports = build;
