function loginController(req, res, next) {
  res.render("index", {
    title: "login page",
  });
}

module.exports = { loginController };
