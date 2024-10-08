const express = require("express");
const app = express();
const morgan = require("morgan");
const todoRouter = require("./router/todo");
const userRouter = require("./router/user");
const logger = require("./startup/logger");

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(morgan("dev"));
app.use("/todos", todoRouter);
app.use("/users", userRouter);

require("./startup/logging");
require("./startup/database")();

app.listen(PORT, () => {
  logger.log("info", `Server running on port ${PORT}`);
});
