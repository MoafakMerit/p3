const express = require("express");
const app = express();
const mongoose = require("mongoose");
const loginRout = require("./routes/login");
const userRout = require("./routes/user");
const repairRequestRout = require("./routes/repair-request");
const orderRout = require("./routes/order");
const winston = require("winston");
const middlewareErrorHandler = require("./middleware/middleware-error-handler");
require("dotenv").config();
require("express-async-errors");
const port = process.env.DEV_ENV_PORT;

app.use(express.json());

winston.add(new winston.transports.File({ filename: "errorlog.log" }));

app.use("/login", loginRout);
app.use("/api/users", userRout);
app.use("/api/repair-requests", repairRequestRout);
app.use("/api/orders", orderRout);

app.use(middlewareErrorHandler);

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
