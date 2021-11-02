const express = require("express");
const User = require("../model/user");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = "mongoose";

const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email });

  if (!user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Email or password is not correct! :(");
  }
  //check password
  checkedPassword = await bcrypt.compare(password, user.password);
  if (!checkedPassword) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Email or password is not correct! :(");
  }

  const token = await user.createJWT();
  res.status(StatusCodes.OK).send("logged in");
};

module.exports = login;
