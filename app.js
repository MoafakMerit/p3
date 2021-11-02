const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.DEV_ENV_PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.json("ok");
});

const start = async (url) => {
  try {
    url = process.env.MONGO_URI;
    mongoose.connect(url, console.log("connected to DB"));
    app.listen(3000, console.log(`server is listening on ${port}`));
  } catch (error) {
    console.log("Can not connect to DB");
    process.exit(1);
  }
};

start();
