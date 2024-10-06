const todoSchema = require("../schema/todo");
const mongoose = require("mongoose");

module.exports = mongoose.model("ToDo", todoSchema);
