const express = require("express");
const User = require("../model/user");
const { StatusCodes } = require("http-status-codes");

//Add user

const addUser = async (req, res) => {
  const { email } = req.body;
  let user = await User.findOne({ email: email });

  if (user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(`${email} is already registerd!`);
  }
  user = await User.create({ ...req.body });
  return res.status(StatusCodes.OK).json(`${email} is now registerd!`);
};

// get all users
const getAllUser = async (req, res) => {
  const allUsers = await User.find({});
  res.status(StatusCodes.OK).json(allUsers);
};

module.exports = { addUser, getAllUser };
