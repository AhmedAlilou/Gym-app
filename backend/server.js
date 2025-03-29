require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");
const workoutHistoryRoutes = require("./routes/workoutHistory");

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// middleware to log the request path and method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/workouts", workoutRoutes);
app.use("/workoutHistory", workoutHistoryRoutes);

mongoose
  .connect(URI)
  .then(() => {
    // if the connection is successful then the server will start
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
