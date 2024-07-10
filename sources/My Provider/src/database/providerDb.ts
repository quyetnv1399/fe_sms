import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/provider")
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("DB Connection Failed: ", error);
  });