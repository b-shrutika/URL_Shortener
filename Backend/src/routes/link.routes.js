const express = require("express");
const linkController = require("../controllers/link.controller");
const router = express.Router();


router.post("/create", linkController.createLink);

module.exports = router;