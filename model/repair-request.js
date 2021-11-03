const mongoose = require("mongoose");

const repairRequestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createDate: { type: Date, default: Date.now() },
  updateDate: Date,
  detail: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["recived", "process", "finished"] },
});

const RepairRequest = mongoose.model("Repair Request", repairRequestSchema);

module.exports = RepairRequest;
