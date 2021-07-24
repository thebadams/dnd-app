const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: "The App Is Working Thus Far"
  })
})

module.exports = router;
