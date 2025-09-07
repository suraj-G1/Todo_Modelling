const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: trueF,
    },
    isComplete: {
      type: String,
    },
  },

  { timestamps: true }
);
