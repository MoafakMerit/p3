const express = require("express");
const {
  getAllRepairRequests,
  addRepairRequest,
  getARepairRequests,
  updateRequest,
  updateRequest1,
} = require("../api/repair-request");
const router = express.Router();

router.route("/").post(addRepairRequest);
router.route("/all").get(getAllRepairRequests);
router.route("/:id").get(getARepairRequests).patch(updateRequest);

module.exports = router;
