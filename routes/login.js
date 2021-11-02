const express = require("express");
const login = require("../api/login");
const router = express.Router();

router.route("/").post(login).get(login);

module.exports = router;
