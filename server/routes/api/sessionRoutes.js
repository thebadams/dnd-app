const router = require('express').Router();
const { CampaignSession, Campaign } = require('../../models');
const ExpressError = require('../../utils/expressError');
const mongoose = require('../../config/mongoose');
//TODO: Figure Out Transactions
//route to create a new campaign session in the db
router.post('/', async (req, res) => {
  try {
  const campaign = await Campaign.findById(req.body.campaign)
  console.log('Original Campaign', campaign)
  if(!campaign) {
    throw new ExpressError(204, 'No Campaign With that ID Found');
  }
  const campaignDetails = {
    name: "The First Session",
    sessionNumber: `${campaign.name}-${campaign.sessionNum}`
  }
  const newCampaignSession = await CampaignSession.create(campaignDetails);
  console.log('New Session', newCampaignSession)
  if(!newCampainSesison) {
    throw new ExpressError(204, 'No New Campaign Could Be Created')
  }

  campaign.sessionNum = campaign.sessionNum + 1;
  campaign.sessions.push(newCampaignSession._id);
  console.log('Edited Campaign', campaign)

  const savedCampaign = await campaign.save()
  console.log('Saved Campaign', savedCampaign)
  res.json({
    campaign: savedCampaign,
    session: newCampaignSession
  })
  } catch (error) {
    res.json(error)
  }
  // const clientSession = await mongoose.startSession();
  // try {
  //   const campaign = await Campaign.findById(req.body.campaignId, {session: clientSession}).exec()
  //   if(!campaign) {

  //   throw new ExpressError(204, 'No Campaign Found With That ID')
  // }
  // const transactionResult = await mongoose.transaction(async (clientSession) => {
  //   try {
  //     const campaignSessionDoc = {
  //     name: req.body.name,
  //     sessionNumber: `${campaign.name}-${campaign.sessionNum}`
  //   }
  //   const newCampaignSession = await CampaignSession.create(campaignSessionDoc, {session: clientSession});
  //   if (!newCampaignSession) {
  //     throw new Error("The Campaign Session Failed To Be Created")
  //   }

  //   campaign.sessionNum = campaign.sessionNum + 1;
  //   campaign.sessions.push(newCampaignSession);
  //   const savedCampaign = await campaign.save({session: clientSession})
  //   if(!savedCampaign) {
  //     throw new Error('The Campaign Failed To Update Correctly')
  //   }

  //   return {
  //     savedCampaign,
  //     newCampaignSession
  //   }
  //   } catch (error) {
  //     return error
  //   }
  // })

  // if(transactionResult instanceof Error ) {
  //   throw ExpressError(204, 'There was an error!')
  // }
  // res.json(transactionResult)
  // } catch (error) {
  //   res.json(error);
  // } finally {
  //   await clientSession.endSession()
  // }
})

module.exports = router;
