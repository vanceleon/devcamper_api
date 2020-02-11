// @desc Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ succes: true, msg: 'Show all bootcamps', hello: req.hello });
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
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: 'Create new bootcamp message' });
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
