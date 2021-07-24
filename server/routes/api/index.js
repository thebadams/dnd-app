const router = require('express').Router();
const campaignRoutes = require('./campaignRoutes');

router.use('/campaign', campaignRoutes);

module.exports = router;
