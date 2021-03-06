const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/bootcamp');
const geocoder = require('../utils/geocoder');

// @desc Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access    Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @desc Get single bootcamp
// @route   Get /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return new ErrorResponse(
      `Bootcamp not found with id of ${req.params.id}`,
      404
    ); //this is for properly formatted ids but not in the db
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc create new bootcamp
// @route   Post /api/v1/bootcamps
// @access    Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp
  });
  // Code below will show the data inserted into the db and the request in console
});

// @desc Update new bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!bootcamp) {
    return new ErrorResponse(
      `Bootcamp not found with id of ${req.params.id}`,
      404
    ); //this is for properly formatted ids but not in the db
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc DELETE bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return new ErrorResponse(
      `Bootcamp not found with id of ${req.params.id}`,
      404
    ); //this is for properly formatted ids but not in the db
  }
  res.status(200).json({ success: true, data: `Deleted ${bootcamp}` });
});

// @desc Get bootcamps within a radius
// @route   GET /api/v1/bootcamps/radius/:zipcode/:distance
// @access    Private
exports.getBootcampsInRadius = asyncHandler(async (req, res, next) => {
  const {zipcode, distance} = req.params

  // GET lat/lng from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[9].longitude;

  // Calc radius using radians
  // Divide dist by radius of Earth
  // Earth Radius = 3,963 mi / 6,378 km
  const earthRadiusInMiles = 3963;
  const radius = distance / earthRadiusInMiles;

  const bootcamps = await Bootcamp.find({
    location: {
      $geoWithin: { $centerSphere: [ [ lng, lat ], radius ] }
    }
  });
  res.status(200).json({success: true, count: bootcamps.length, data: bootcamps})
  })
