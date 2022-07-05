/*
 *
 * MAIN FILE
 *
 */

// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = express.Router();
const routes = require("./routes/index");

dotenv.config();

const app = express();

// PARSING THE DATA
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CONN_URL = process.env.MONGODB_CONN_URL;
const PORT = process.env.PORT || 8000;

mongoose
  .connect(CONN_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED!!");
  })
  .catch((err) => {
    console.log(err);
  });

// ROUTES
app.use("/api/v1", routes(router));
app.get("/api/v1", (req, res) => {
  res.json(`Hi There`);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

module.exports = app;
