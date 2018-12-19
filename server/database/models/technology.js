const { model, Schema } = require('mongoose');

// Technology Schema
// Defines how to store the technologies

const TechnologySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  image: String,
  resources: [{
    text: {
      type: String,
    },
    url: {
      type: String,
    },
  }],
});

const Technology = model('technologies', TechnologySchema);

module.exports = Technology;
