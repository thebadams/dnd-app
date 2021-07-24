const router = require('express').Router();
const { Campaign } = require('../../models')
const ExpressError = require('../../utils/expressError')

router.post('/', async (req, res)=> {
  console.log(req)
  try {
    const newCampaign = await Campaign.create({name: "Galdrheim"});
    res.json(newCampaign)

  } catch (error) {
    res.json(error)
  }

})

router.get('/', async (req, res) => {
 try {
   const campaigns = await Campaign.find()
   if(!campaigns) {
     throw new ExpressError(404, 'No Campaigns Found')
   }
   res.json(campaigns)
 } catch (error) {
   res.json(error)
 }
})

module.exports = router;
