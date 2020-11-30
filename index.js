require("dotenv").config();
const getRetweeter = require("./retweeter");

getRetweeter().then(console.log);