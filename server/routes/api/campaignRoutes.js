const router = require('express').Router();
const { Campaign } = require('../../models')
const ExpressError = require('../../utils/expressError')

router.post('/', async (req, res)=> {
  console.log(req)
  try {
    const newCampaign = await Campaign.create(req.body);
    res.status(201).json(newCampaign)

  } catch (error) {
    res.json(error)
  }

})

router.get('/', async (req, res) => {
  console.log(req.body)
 try {
   const campaigns = await Campaign.find().exec()
   if (campaigns.length === 0) {
     throw new ExpressError(204, 'No Campaigns Found')
   }
   res.json(campaigns)
 } catch (error) {
   res.json(error)
 }
})

router.delete('/:id', async(req, res) => {
  console.log(req.params)
  try {
    const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id)
    if (!deletedCampaign) {
      throw new ExpressError(204, "No Campaigns With That ID Found")
    }
    res.status(200).json(deletedCampaign)

  } catch (error) {
    res.json(error)
  }
})

module.exports = router;
