const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const campaignSchema = new Schema({
  name: {
    type: String,
    required: [true, "You must give a name to the campaign"]
  }
})
const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
