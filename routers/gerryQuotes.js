const express = require('express');
const router = express.Router();
const gerryScottiQuotes = require('./../data/gerryQuotes');


router.get('/all', (req, res) => {
  res.send(gerryScottiQuotes);
})

router.get('/random', (req, res) => {
  const max = gerryScottiQuotes.length;
  const randomNumber = Math.floor(Math.random() * max)

  res.send(gerryScottiQuotes[randomNumber]);
});

module.exports = router;