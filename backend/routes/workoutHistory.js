const experess = require("express");
const {
  getWorkoutHistories,
  getWorkoutHistory,
  createWorkoutHistory,
  deleteWorkoutHistory
} = require("../controllers/workoutHistoryController");

const router = experess.Router();

router.get("/", getWorkoutHistories);
router.get("/:id", getWorkoutHistory);
router.post("/", createWorkoutHistory);
router.delete("/:id", deleteWorkoutHistory);

module.exports = router;
