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
  const { price, nummericFilter, page } = req.query;
  let filterObject = {};

  if (price) {
    filterObject.price = price;
  }

  if (nummericFilter) {
    const operatorMap = {
      ">": "$gt",
      "<": "$lt",
      "=>": "$egt",
      "=<": "$elt",
      "=": "$eq",
    };

    const regEx = /\b(<|>|=>|<|>=|=)\b/g;

    let filter = nummericFilter.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price"];
    filter = filter.split(",").forEach((element) => {
      const [field, operator, value] = element.split("-");
      if (options.includes(field)) {
        filterObject[field] = { [operator]: value };
      }
    });
    console.log(filterObject);
  }

  if (page) {
    var limitPerPage = 2;
    var skip = (page - 1) * limitPerPage || limitPerPage;
    console.log(skip);
  }

  const result = await Order.find(filterObject).skip(skip);
  res.status(StatusCodes.OK).json({ Total: result.length, result });
};

module.exports = { addOrder, getAllorders, getAorderByFilter };
