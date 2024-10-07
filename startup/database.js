const logger = require("./logger");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/practice")
    .then(() => logger.log("info", "MongoDB connected"))
    .catch((err) => logger.log("error", err));
};
