const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    sets: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);
