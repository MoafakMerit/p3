const express = require("express");
const Order = require("../model/order");
const { StatusCodes } = require("http-status-codes");

//Add requests

const addOrder = async (req, res) => {
  const order = await Order.create({ ...req.body });
  return res
    .status(StatusCodes.OK)
    .json(`${order.title} is now registerd with id ${order.id}!`);
};

// get all orders
const getAllorders = async (req, res) => {
  const allOreders = await Order.find({}).populate(
    "customer createdBy",
    "name status -_id"
  );
  res.status(StatusCodes.OK).json({ Total: allOreders.length, allOreders });
};

// filter orders
const getAorderByFilter = async (req, res) => {
  const { price, nummericFilter } = req.query;
  let filterObject = {};

  if (price) {
    filterObject.price = price;
  }

  if (nummericFilter) {
    const nMap = {
      ">": "$gt",
      "<": "$lt",
      "=>": "$egt",
      "=<": "$elt",
      "=": "$eq",
    };
    console.log(nummericFilter);
  }

  const result = await Order.find(filterObject);
  res.status(StatusCodes.OK).json({ Total: result.length, result });
};

module.exports = { addOrder, getAllorders, getAorderByFilter };
