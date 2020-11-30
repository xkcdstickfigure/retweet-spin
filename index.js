require("dotenv").config();
const getRetweeter = require("./retweeter");

const express = require("express");
const app = express();
app.listen(3000);
app.use(express.static("web"));