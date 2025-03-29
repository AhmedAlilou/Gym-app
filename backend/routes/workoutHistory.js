const experess = require("express");
const {
  getWorkoutHistories,
  getWorkoutHistory,
  createWorkoutHistory
} = require("../controllers/workoutHistoryController");

const router = experess.Router();

router.get("/", getWorkoutHistories);
router.get("/:id", getWorkoutHistory);
router.post("/", createWorkoutHistory);

module.exports = router;
