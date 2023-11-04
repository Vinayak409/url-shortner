const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirect,
} = require("../controllers/url");
const router = express.Router();

router.post("/url", handleGenerateNewShortURL);

router.get("/:shortId", handleRedirect);
router.get("/url/analytics/:shortId", handleGetAnalytics);

module.exports = router;
