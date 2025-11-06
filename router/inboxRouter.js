const express = require("express");
const router = express.Router();
const { inboxController } = require("../controller/inboxController");
const decorateHTML = require("../middlewares/common/decorateHTML");

router.get("/", decorateHTML("login"), inboxController);

module.exports = router;
