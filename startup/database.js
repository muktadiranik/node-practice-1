const mongoose = require("mongoose");
const logger = require("./logger");

module.exports = function () {
  mongoose.connect("mongodb://localhost:27017/todo").then(() => logger.log("info", "MongoDB connected"));
};
