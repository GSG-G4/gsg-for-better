const mongoose = require('mongoose');
const { Schema } = mongoose;

// Team Schema
// Defines how to store teams info which should be done by the admin

const TeamSchema = new Schema({
  name: String,
  technologies: [{
    type: Schema.Types.ObjectId,
    ref: 'technologies',
  }],
});

module.exports = Team = mongoose.model('teams', TeamSchema);
