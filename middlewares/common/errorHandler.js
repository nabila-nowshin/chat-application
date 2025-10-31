const createError = require("http-errors");

//404 Not found
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content Not found"));
}

//deafult one
function errorHandler(err, req, res, next) {
  res.locals.error = { message: err.message };
  res.status(err.status || 500);

  if (!res.locals.html) {
    res.render("error", {
      title: "error page",
      status: res.statusCode,
    });
  } else {
    res.json(res.locals.error);
  }
}

module.exports = { errorHandler, notFoundHandler };
