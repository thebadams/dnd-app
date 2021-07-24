const router = require('express').Router();
const { CampaignSession, Campaign } = require('../../models');
const ExpressError = require('../../utils/expressError');

router.post('/', async (req, res) => {
  const newCampaignSession = new CampaignSession(req.body)
  // find campaign
  try {
    const campaign = await Campaign.findById(req.body.campaign);
    if(!campaign){
      throw new ExpressError(204, 'No Campaign Found With That ID');
    }
    console.log(campaign)
    newCampaignSession.sessionNumber = `${campaign.name}-${campaign.sessionNum}`;
    const session = await newCampaignSession.save();
    console.log('SESSION', session)
    campaign.sessionNum = campaign.sessionNum + 1
    console.log('CAMPAIGN WITH NEW SESSION NUM')
    const savedCampaign = await campaign.save();
    res.json({
      sess: session,
      campaign: savedCampaign
    });
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;
