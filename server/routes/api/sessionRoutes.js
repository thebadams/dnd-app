const router = require('express').Router();
const { CampaignSession, Campaign } = require('../../models');
const ExpressError = require('../../utils/expressError');

//route to create a new campaign session in the db
router.post('/', async (req, res) => {
  
  // find campaign
  try {
    //Find Campaign by ID
    const campaign = await Campaign.findById(req.body.campaign);
    if(!campaign){
      //If no Campaign is found with that id, throw an error
      throw new ExpressError(204, 'No Campaign Found With That ID');
    }

    const newCampaignSession = await CampaignSession.create({
      sessionName: `${campaign.name}-${campaign.sessionNum}`
    })
    //set the session number using elements found within campaig;
    //push new Campaign Session's id onto the campaign's session array
    campaign.sessions.push(newCampaignSession._id)
    //attempt to save the session
    //increment the campaign's session by 1
    campaign.sessionNum = campaign.sessionNum + 1
    //save the updated campaign to the database
    const savedCampaign = await campaign.save();
    //send  back both the created session and the updated campaign as json
    res.json({
      sess: newCampaignSession,
      campaign: savedCampaign
    });
  } catch (error) {
    //if there's an error, send it back as json
    res.json(error)
  }
})

module.exports = router;
