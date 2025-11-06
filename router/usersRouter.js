const express = require("express");
const router = express.Router();
const { usersController } = require("../controller/usersController");
const decorateHTML = require("../middlewares/common/decorateHTML");

router.get("/", decorateHTML("login"), usersController);

module.exports = router;
