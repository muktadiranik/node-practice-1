const winston = require("winston");
require("winston-mongodb");

module.exports = function () {
  winston.exceptions.handle(
    new winston.transports.File({ filename: "uncaughtExceptions.log" }),
    new winston.transports.Console(),
    new winston.transports.MongoDB({
      db: "mongodb://localhost:27017/todo",
      level: "info",
      collection: "logs", // Optional, defaults to "winston"
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    })
  );
  winston.add(new winston.transports.File({ filename: "logfile.log" }));

  process.on("uncaughtException", (ex) => {
    winston.error(ex.message, ex);
    process.exit(1);
  });

  process.on("uncaughtException", (ex) => {
    winston.error("Uncaught Exception:", ex);
    process.exit(1);
  });
};
