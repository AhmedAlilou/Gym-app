require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/workouts", workoutRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
