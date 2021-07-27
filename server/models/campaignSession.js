const mongoose = require('mongoose');

const { Schema } = mongoose;
const campaignSessionSchema = new Schema({
  sessionName: String,
  date: {
    type: Date,
    default: Date.now
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Note',
    autopopulate: true
  }]
});

const CampaignSession = mongoose.model('CampaignSession', campaignSessionSchema);

module.exports = CampaignSession;
