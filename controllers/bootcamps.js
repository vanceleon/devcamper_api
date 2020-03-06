const Bootcamp = require('../models/bootcamp');

// @desc Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ succes: true, msg: 'Show all bootcamps' });
};

// @desc Get single bootcamp
// @route   Get /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: 'Show specific bootcamp' });
};

// @desc create new bootcamp
// @route   Post /api/v1/bootcamps
// @access    Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({ succes: false });
  }
  // Code below will show the data inserted into the db and the request in console
  // console.log(req.body)
  // res.status(200).json({ succes: true, msg: 'Create new bootcamp message' });
};

// @desc Update new bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: `Get Bootcamp ${req.params.id}` });
};

// @desc DELETE bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: `Delete Bootcamp ${req.params.id}` });
};
