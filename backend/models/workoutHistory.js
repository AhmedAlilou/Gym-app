const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutHistorySchema = new Schema(
  {
    workoutData: {
      title: { type: String, required: true },
      description: { type: String },
      // Store the original workoutId for reference but don't rely on it
      originalWorkoutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
        required: true
      }
    },
    date: {
      type: Date,
      required: true
    },
    timeStart: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid time format! Use HH:MM (24-hour format)`
      }
    },
    timeEnd: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid time format! Use HH:MM (24-hour format)`
      }
    },
    exercises: [
      {
        name: { type: String, required: true },
        sets: [
          { reps: { type: Number, required: true }, weight: { type: Number } }
        ]
      }
    ]
  },
  { timestamps: true }
);

const WorkoutHistory = mongoose.model("WorkoutHistory", workoutHistorySchema);
module.exports = WorkoutHistory;
