const router = require('express').Router();
const { CampaignSession, Campaign } = require('../../models');
const ExpressError = require('../../utils/expressError');

router.post('/', async (req, res) => {
  const newCampaignSession = new CampaignSession(req.body)
  newCampaignSession.sessionNumber = 1
  console.log('NEW CAMAPaIGN SESSION', newCampaignSession)
  try {
   const session = await newCampaignSession.save()
   console.log('SESSION', session)
    res.json(session)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;
