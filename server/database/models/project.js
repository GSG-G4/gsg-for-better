const { model, Schema } = require('mongoose');

// Project Schema
// Defines how to store projects info

const ProjectSchema = new Schema({
  githubLink: String,
  projectSite: String,
  projectStatus: String,
  previewImage: String,
  description: String,
  technologies: [{
    type: Schema.Types.ObjectId,
    ref: 'technologies',
  }],
  team: {
    type: Schema.Types.ObjectId,
    ref: 'teams',
  },
  goals: [{
    type: Schema.Types.ObjectId,
    ref: 'goals',
  }],
});

module.exports = Project = model('projects', ProjectSchema);
