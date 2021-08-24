const router = require('express').Router();
const { Note, CampaignSession } = require('../../models');
const ExpressError = require('../../utils/expressError');

router.post('/', async (req, res) => {
  try {
    const campaignSession = await CampaignSession.findById(req.body.sessionId).exec();
    if (!campaignSession) {
      throw new ExpressError(204, 'No Campaign Session Found With That ID');
    }

    const newNote = await Note.create({
      contents: req.body.contents
    });

    // eslint-disable-next-line no-underscore-dangle
    campaignSession.notes.push(newNote._id);
    const savedCampaignSession = await campaignSession.save();

    res.json({
      campaignSession: savedCampaignSession,
      note: newNote
    });
  } catch (error) {
    res.json(error);
  }
});
