const express = require("express");
const { addOrder, getAllorders, getAorderByFilter } = require("../api/order");
const router = express.Router();

router.route("/all").get(getAllorders);
router.route("/").post(addOrder).get(getAorderByFilter);

module.exports = router;
