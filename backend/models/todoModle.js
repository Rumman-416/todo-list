const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  task: {
    type: String,
    maxLength: [15, "tasks character shoul not exceed 15 character"],
    required: true,
  },
  description: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const todoModel = mongoose.model("todoList", todoSchema);

module.exports = todoModel;
