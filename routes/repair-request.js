const express = require("express");
const {
  getAllRepairRequests,
  addRepairRequest,
  getARepairRequests,
  updateRequest,
  updateAllRequest,
  getARepairRequestByFilter,
} = require("../api/repair-request");
const router = express.Router();

router.route("/").post(addRepairRequest).get(getARepairRequestByFilter);
router.route("/all").get(getAllRepairRequests).patch(updateAllRequest);
router.route("/:id").get(getARepairRequests).patch(updateRequest);
//router.route("/query").get(getARepairRequestByFilter);

module.exports = router;
