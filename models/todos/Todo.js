const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: trueF,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },

  { timestamps: true }
);
