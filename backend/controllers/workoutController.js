const Workout = require("../models/workout");

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createWorkout = async (req, res) => {
  const { title, description, exercises } = req.body;
  try {
    const workout = await Workout.create({ title, description, exercises });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findByIdAndDelete(id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, description, exercises } = req.body;
  try {
    const workout = await Workout.findByIdAndUpdate(
      id,
      { title, description, exercises },
      { new: true }
    );
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
};
