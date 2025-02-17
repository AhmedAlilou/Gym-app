require("dotenv").config();

const express = require("express");
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
