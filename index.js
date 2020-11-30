require("dotenv").config();
const getRetweeter = require("./retweeter");
let user = null;

// Fetch user every 7 seconds
setInterval(async () => {
    try {
        user = await getRetweeter();
    } catch (err) {
        user = null;
    }
}, 7000);

// Web Server
const express = require("express");
const app = express();
app.listen(3000);
app.use(express.static("web"));

// Data Endpoint
app.get("/data", (_req, res) => {
    res.json(user ? {
        name: user.name,
        username: user.screen_name,
        image: user.profile_image_url
    } : {
        name: "Alles",
        username: "AllesHQ",
        image: "https://files.alles.cc/Alles%20Logos/Rainbow%20(Dark).png"
    });
});