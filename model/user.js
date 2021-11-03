const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: { type: String, uniqe: true },
  role: { type: String, enum: ["admin", "worker", "customer"] },
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ id: this.id, role: this.role }, process.env.JWT_SECRET);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
