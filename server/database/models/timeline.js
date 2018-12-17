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

const Timeline = model('timelines', TimelineSchema);

module.exports = Timeline;
