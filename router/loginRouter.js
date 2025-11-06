const express = require("express");
const router = express.Router();
const { loginController } = require("../controller/loginController");
const decorateHTML = require("../middlewares/common/decorateHTML");

router.get("/", decorateHTML("login"), loginController);

module.exports = router;
