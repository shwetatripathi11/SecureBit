const mongoose = require("mongoose");

const CheatingLogSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  noFaceCount: { type: Number, default: 0 },
  cellPhoneCount: { type: Number, default: 0 },
  ProhibitedObjectCount: { type: Number, default: 0 },
  multipleFaceCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CheatingLog", CheatingLogSchema);
