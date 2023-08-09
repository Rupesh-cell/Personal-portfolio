require("dotenv").config({ path: ".env" });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const db = require("./Db.js");

const app = express();
app.use(bodyParser.json()); // for parsing application/json
const port = process.env.PORT || 5001;
app.use(cors({ origin: true, credentials: true }));
const projectRoute = require("./Routes/project.routes.js")
app.use("/api",projectRoute)
app.listen(port, () => {
  console.log("Listening on port");
});
