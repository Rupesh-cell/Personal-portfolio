require("dotenv").config({ path: ".env" });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const db = require("./Db.js");
const multer = require("multer");
const upload = require("./multer-config"); // Import Multer configuration

const app = express();
app.use(bodyParser.json()); // for parsing application/json
const port = process.env.PORT || 5001;
app.use(cors({ origin: true, credentials: true }));
const projectRoute = require("./Routes/project.routes.js");
const contactRoute = require("./Routes/contact.routes.js");
const cvRoute = require("./Routes/cv.routes.js");
const techRoute = require("./Routes/techmastered.routes.js");

app.use("/api", projectRoute);
app.use("/api", contactRoute);
app.use("/api", cvRoute);
app.use("/api", techRoute);

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
