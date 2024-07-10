import express from "express";
import "./database/providerDb";
import providerRouter from "./routers/providerRouter";
const cors = require('cors');

//create a server '
const app = express();

//use middleware cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/provider", providerRouter);

// listen to port
app.listen(8000, () => {
  console.log("App is running on http://localhost:8000");
});
