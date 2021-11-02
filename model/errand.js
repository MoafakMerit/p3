const mongoose = require("mongoose");

const errandSchema = mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createDate: { type: Date, default: Date.now() },
  updateDate: Date,
  text: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const Errand = mongoose.model("errand", errandSchema);

module.exports = Errand;
