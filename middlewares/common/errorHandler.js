const createError = require("http-errors");

//404 Not found
function notFoundHandler(req, res, next) {
  next(createError("404", "Your requested content Not found"));
}
