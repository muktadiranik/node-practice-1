const logger = require("./logger");
const MongoClient = require("mongodb").MongoClient;

module.exports = function () {
  const url = "mongodb://localhost:27017/todo";
  const client = new MongoClient(url);

  client
    .connect()
    .then(() => logger.log("info", "MongoDB connected"))
    .catch((err) => logger.log("error", err));
};
