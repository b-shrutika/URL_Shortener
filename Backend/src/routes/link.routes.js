const express = require("express");
const linkController = require("../controllers/link.controller");
const analyticsController = require("../controllers/analytics.controller");
const createLinkLimiter = require("../middlewares/rate.limiter");
const verifyToken = require("../middlewares/auth.middleware")
const router = express.Router();

router.post("/", verifyToken, createLinkLimiter, linkController.createLink);
router.post("/my-links", verifyToken, linkController.getUserUrls);

router.get("/:shortCode", linkController.redirectToOriginalUrl);

router.get("/analytics/:shortCode", verifyToken, analyticsController.getAnalytics);

module.exports = router;