const { StatusCodes } = require("http-status-codes");

const middlewareErrorHandler = (err, req, res) => {
  if (err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
};

module.exports = middlewareErrorHandler;
