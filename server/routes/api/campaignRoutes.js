const router = require('express').Router();
const { Campaign } = require('../../models')
const asyncErrorHandler = require('../../asyncErrorHandler');

router.post('/', async (req, res)=> {
  console.log(req)
  try {
    const newCampaign = await Campaign.create({name: "Galdrheim"});
    res.json(newCampaign)

  } catch (error) {
    res.json(error)
  }

})

router.get('/', (req, res) => {
  res.json({
    message: "The App Is Working Thus Far"
  })
})

module.exports = router;
