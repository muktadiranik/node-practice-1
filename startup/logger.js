const winston = require("winston");
require("winston-mongodb");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logfile.log" }),
    new winston.transports.MongoDB({
      db: "mongodb://localhost:27017/todo",
      level: "info",
      collection: "logs",
      options: { useNewUrlParser: true, useUnifiedTopology: true },
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
