const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout
} = require("../controllers/workoutController");

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.json({ message: `DELETE workout with id ${req.params.id}` });
});

router.patch("/:id", (req, res) => {
  res.json({ message: `PATCH workout with id ${req.params.id}` });
});

module.exports = router;
