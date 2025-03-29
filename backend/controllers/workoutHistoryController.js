const WorkoutHistory = require("../models/workoutHistory");
const Workout = require("../models/workout");
const mongoose = require("mongoose");

const getWorkoutHistories = async (req, res) => {
  try {
    const workoutHistories = await WorkoutHistory.find();
    res.status(200).json(workoutHistories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getWorkoutHistory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid workout history ID" });
  }

  try {
    const workoutHistory = await WorkoutHistory.findById(id);

    if (!workoutHistory) {
      return res.status(404).json({ error: "Workout history not found" });
    }

    res.status(200).json(workoutHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createWorkoutHistory = async (req, res) => {
  const { workoutId, date, timeStart, timeEnd, exercises } = req.body;

  if (!mongoose.Types.ObjectId.isValid(workoutId)) {
    return res.status(400).json({ message: "Invalid workout ID" });
  }

  try {
    // Fetch just the title from original workout
    const originalWorkout = await Workout.findById(workoutId);

    if (!originalWorkout) {
      return res.status(404).json({ error: "Original workout not found" });
    }

    // Create workout history with original title but custom exercises
    const workoutHistory = await WorkoutHistory.create({
      workoutData: {
        title: originalWorkout.title,
        description: originalWorkout.description,
        originalWorkoutId: workoutId
      },
      date,
      timeStart,
      timeEnd,
      exercises // Use exercises from request body
    });

    res.status(201).json(workoutHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getWorkoutHistories,
  getWorkoutHistory,
  createWorkoutHistory
};
