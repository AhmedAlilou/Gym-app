const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    exercises: [
      {
        name: { type: String, required: true },
        reps: { type: Number, required: true },
        sets: { type: Number, required: true },
        weight: { type: Number }
      }
    ]
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
