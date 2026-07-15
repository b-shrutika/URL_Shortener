const express = require("express");
const linkController = require("../controllers/link.controller");
const analyticsController = require("../controllers/analytics.controller");
const router = express.Router();


router.post("/create", linkController.createLink);

router.get("/:shortCode", linkController.redirectToOriginalUrl);

router.get("/analytics/:shortCode", analyticsController.getAnalytics);

module.exports = router;