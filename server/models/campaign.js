const mongoose = require('mongoose');
const mongooseAutoPopulate = require('mongoose-autopopulate');

const Schema = mongoose.Schema;
const campaignSchema = new Schema({
  name: {
    type: String,
    required: [true, "You must give a name to the campaign"]
  },
  sessionNum: {
    type: Number,
    default: 1
  },
  sessions: [{
    type: Schema.Types.ObjectId,
    ref: 'CampaignSession',
    autopopulate: true
  }]
})
campaignSchema.plugin(mongooseAutoPopulate);
campaignSchema.methods.incrementSessionNum = function () {
  this.sessionNum = this.sessionNum + 1
}
const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
