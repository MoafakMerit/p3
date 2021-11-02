const express = require("express");
const { getAllUser, addUser } = require("../api/user");
const router = express.Router();

router.route("/all").get(getAllUser);
router.route("/").post(addUser);

module.exports = router;
