const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `GET workout with id ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.json({ message: "POST new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `DELETE workout with id ${req.params.id}` });
});

router.patch("/:id", (req, res) => {
  res.json({ message: `PATCH workout with id ${req.params.id}` });
});

module.exports = router;
