import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://mongotest:1234@cluster0.rbacgs1.mongodb.net/DKTEST?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("DB Connection Failed: ", error);
  });