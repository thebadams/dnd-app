const mongoose = require('mongoose');
const { Campaign } = require('./index')
const Schema = mongoose.Schema;
const campaignSessionSchema = new Schema({
  sessionNumber: String,
  campaign: {
    type: Schema.Types.ObjectId,
    ref: "Campaign"
  },
  date: {
    type: Date,
    default: Date.now
  }
})

campaignSessionSchema.methods.setSessionNumber = async () => {
  //find campaign name
  try {
   const campaign = await Campaign.findById(this.campaign).exec()
   if(!campaign) {
     throw Error('No Campaign Found With That ID');
   } else {
     const {name, sessionNum} = campaign;
     let sessionNumber = `${name}-${sessionNum}`
     this.sessionNumber = sessionNumber
     campaign.setSessionNumber()
   }
  } catch (error) {
    console.log(error);
  } 
}

const CampaignSession = mongoose.model('CampaignSession', campaignSessionSchema)

module.exports = CampaignSession;
