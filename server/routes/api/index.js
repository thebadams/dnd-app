const router = require('express').Router();
const campaignRoutes = require('./campaignRoutes');
const sessionRoutes = require('./sessionRoutes');

router.use('/campaign', campaignRoutes);

router.use('/session', sessionRoutes);

module.exports = router;
