const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (error, req, res, next) => {
  // Log to console for dev
  let errorObj = { ...error };

  //Log to console for dev
  console.log(error);

  errorObj.message = error.message;

  //Mongoose bad ObjectId
  if (error.name === 'CastError') {
    const message = `Bootcamp not found with id of ${error.value}`;
    errorObj = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate key
  if (error.code === 11000) {
    const message = 'Duplicate field value entered';
    errorObj = new ErrorResponse(message, 400);
  }

  //Mongoose Validation error
  if (error.name === 'ValidationError') {
    // dynamically create alerts for the frontend to notify the user
    const message = Object.values(error.errorObj).map(val => val.message);
    errorObj = new ErrorResponse(message, 400);
  }

  res.status(errorObj.statusCode || 500).json({
    success: false,
    error: errorObj.message || 'Server Error'
  });
};
module.exports = errorHandler;
