const createError = require("http-errors");

//404 Not found
function notFoundHandler(req, res, next) {
  next(createError("404", "Your requested content Not found"));
}

//deafult one
function errorHandler(err, req, res, next) {
  res.render("error", {
    title: "error",
  });
}

module.exports = { errorHandler, notFoundHandler };
