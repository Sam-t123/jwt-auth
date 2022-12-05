const CustomAPIError = require('./custom-error');
const UnauthenticatedError = require('./unauthenticated');
const BadRequestError = require('./bad-request');

// exporting all errors from 1 file
module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  BadRequestError,
};
