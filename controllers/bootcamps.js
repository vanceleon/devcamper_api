const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/bootcamp');

// @desc Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access    Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc Get single bootcamp
// @route   Get /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return new ErrorResponse(
        `Bootcamp not found with id of ${req.params.id}`,
        404
      );//this is for properly formatted ids but not in the db
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    ); //id is not valid
    // res.status(400).json({ success: false });
  }
};

// @desc create new bootcamp
// @route   Post /api/v1/bootcamps
// @access    Private
exports.createBootcamp = async (req, res, next) => {
  try {
    //Things will be refactored
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
  // Code below will show the data inserted into the db and the request in console
  // console.log(req.body)
  // res.status(200).json({ succes: true, msg: 'Create new bootcamp message' });
};

// @desc Update new bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc DELETE bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: `Deleted ${bootcamp}` });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
