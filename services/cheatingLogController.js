const CheatingLog = require("../models/CheatingLog");

// Store cheating data
exports.logCheatingActivity = async (req, res) => {
  try {
    const { testId, studentId, cheatingLog } = req.body;

    let log = await CheatingLog.findOne({ testId, studentId });

    if (!log) {
      log = new CheatingLog({ testId, studentId, ...cheatingLog });
    } else {
      log.noFaceCount += cheatingLog.noFaceCount;
      log.cellPhoneCount += cheatingLog.cellPhoneCount;
      log.ProhibitedObjectCount += cheatingLog.ProhibitedObjectCount;
      log.multipleFaceCount += cheatingLog.multipleFaceCount;
    }

    await log.save();
    res.status(200).json({ message: "Cheating log updated", log });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Retrieve cheating logs for a test
exports.getCheatingLogs = async (req, res) => {
  try {
    const { testId } = req.params;
    const logs = await CheatingLog.find({ testId }).populate("studentId", "name email");

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
