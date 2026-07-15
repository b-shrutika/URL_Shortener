const express = require("express");
const linkController = require("../controllers/link.controller");
const analyticsController = require("../controllers/analytics.controller");
const createLinkLimiter = require("../middlewares/rate.limiter");
const router = express.Router();


router.post("/create", createLinkLimiter, linkController.createLink);

router.get("/:shortCode", linkController.redirectToOriginalUrl);

router.get("/analytics/:shortCode", analyticsController.getAnalytics);

module.exports = router;