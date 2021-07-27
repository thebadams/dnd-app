const mongoose = require('mongoose');
const { Campaign } = require('./index')
const Schema = mongoose.Schema;
const campaignSessionSchema = new Schema({
  sessionName: String,
  date: {
      type: Date,
      default: Date.now
    }
});

const CampaignSession = mongoose.model('CampaignSession', campaignSessionSchema)

module.exports = CampaignSession;
