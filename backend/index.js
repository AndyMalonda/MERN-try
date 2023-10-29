import express from "express";
import mongoose from "mongoose";
import { PORT, MONGO_URL } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  console.log("Request received");
  return res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
