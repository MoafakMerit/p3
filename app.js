const express = require("express");
const app = express();
const mongoose = require("mongoose");
const loginRout = require("./routes/login");
const userRout = require("./routes/user");
require("dotenv").config();

const port = process.env.DEV_ENV_PORT;

app.use(express.json());

app.use("/login", loginRout);
app.use("/api/users", userRout);

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
