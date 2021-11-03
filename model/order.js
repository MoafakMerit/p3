const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  repairRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Repair Request",
  },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createDate: { type: Date, default: Date.now() },
  detail: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: Number,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
