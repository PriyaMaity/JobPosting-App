const express = require("express");
const router = require("./routes/jobRoutes");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use("/api/v1", router);

const PORT = process.env.PORT || 8000;
const uri = process.env.DATABASE_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to DB Successfully"))
  .catch((err) => console.log("Error in connecting to DB:", err));

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
