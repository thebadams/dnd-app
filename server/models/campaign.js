const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const campaignSchema = new Schema({
  name: {
    type: String,
    required: [true, "You must give a name to the campaign"]
  },
  sessionNum: {
    type: Number,
    default: 1
  }
})

campaignSchema.methods.setSessionNum = () => {
  this.sessionNum = this.sessionNum++
}
const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
