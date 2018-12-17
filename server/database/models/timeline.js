const { model, Schema } = require('mongoose');

// Timeline Schema
// Defines how to store weeks info for the timeline

const TimelineSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'teams',
  },
  goals: [{
    type: Schema.Types.ObjectId,
    ref: 'goals',
  }],
});

module.exports = Timeline = model('timelines', TimelineSchema);
