const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Technology Schema
// Defines how to store the technologies

const TechnologySchema = new Schema({
  name: String,
  image: String,
  resources: [{
    type: String,
  }],
});

module.exports = Technology = mongoose.model('technologies', TechnologySchema);
