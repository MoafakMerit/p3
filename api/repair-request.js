const express = require("express");
const RepairRequest = require("../model/repair-request");
const { StatusCodes } = require("http-status-codes");

//Add requests

const addRepairRequest = async (req, res) => {
  const repairRequest = await RepairRequest.create({ ...req.body });
  return res
    .status(StatusCodes.OK)
    .json(
      `${repairRequest.title} is now registerd with id ${repairRequest.id}!`
    );
};

// get a repair requests
const getARepairRequests = async (req, res) => {
  const { id } = req.params;
  const repairRequests = await RepairRequest.findById({ _id: id });
  if (!repairRequests)
    return res.status(StatusCodes.NOT_FOUND).json("Request not found! :( ");
  res.status(StatusCodes.OK).json(repairRequests);
};

// get all repair requests
const getAllRepairRequests = async (req, res) => {
  const allRepairRequests = await RepairRequest.find({}).populate(
    "customer createdBy",
    "name status -_id"
  );
  res
    .status(StatusCodes.OK)
    .json({ Total: allRepairRequests.length, allRepairRequests });
};

// update request

const updateRequest = async (req, res) => {
  const { id } = req.params;
  const updatedRequest = await RepairRequest.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );
  res.status(StatusCodes.OK).json(updatedRequest);
};

// update all request

const updateAllRequest = async (req, res) => {
  const updatedAllRequest = await RepairRequest.updateMany(
    {},
    { ...req.body },
    { new: true, strict: false }
  );
  res.status(StatusCodes.OK).json(updatedAllRequest);
};

// filter request
const getARepairRequestByFilter = async (req, res) => {
  const { status, createDate } = req.query;
  let filterObject = {};

  if (status) {
    filterObject.status = status;
  }
  if (createDate) {
    filterObject.createDate = createDate;
  }

  const result = await RepairRequest.find(filterObject);
  res.status(StatusCodes.OK).json({ Total: result.length, result });
};

module.exports = {
  addRepairRequest,
  getARepairRequests,
  getAllRepairRequests,
  updateRequest,
  updateAllRequest,
  getARepairRequestByFilter,
};
