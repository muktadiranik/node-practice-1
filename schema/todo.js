const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, required: true, enum: ["pending", "completed"] },
});

module.exports = todoSchema;
