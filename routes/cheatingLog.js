const express = require("express");
const router = express.Router();
const { logCheatingActivity, getCheatingLogs } = require("../services/cheatingLogController");

// Route to store cheating logs
router.post("/log", logCheatingActivity);

// Route to fetch logs for a specific test
router.get("/:testId", getCheatingLogs);

module.exports = router;
