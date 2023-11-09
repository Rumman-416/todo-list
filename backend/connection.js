const mongoose = require("mongoose");
const { URI } = require("./config");

exports.connection = mongoose
  .connect(URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database err:", err);
  });
