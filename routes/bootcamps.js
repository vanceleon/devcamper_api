const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ succes: true, msg: 'Show all bootcamps' });
});

router.post('/', (req, res) => {
  res.status(200).json({ succes: true, msg: 'Create new bootcamp message' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ succes: true, msg: `Get Bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ succes: true, msg: `Delete Bootcamp ${req.params.id}` });
});

module.exports = router;