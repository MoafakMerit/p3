const { StatusCodes } = require("http-status-codes");

const middlewareErrorHandler = (err, req, res, next) => {
  if (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  } else {
    next();
  }
};

module.exports = middlewareErrorHandler;
