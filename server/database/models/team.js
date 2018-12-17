const { model, Schema } = require('mongoose');

// Team Schema
// Defines how to store teams info which should be done by the admin

const TeamSchema = new Schema({
  name: String,
  technologies: [{
    type: Schema.Types.ObjectId,
    ref: 'technologies',
  }],
});

const Team = model('teams', TeamSchema);

module.exports = Team;
