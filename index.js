require("dotenv").config();
const fs = require("fs");
const getRetweet = require("./retweet");
let rt = null;

// Fetch user every 7 seconds
setInterval(async () => {
    try {
        rt = await getRetweet();
    } catch (err) {
        console.error(err);
        rt = null;
    }
}, 15000);

// Web Server
const express = require("express");
const app = express();
app.listen(3000);
app.use(express.static("web"));

// Data Endpoint
app.get("/data", (_req, res) => {
    let message = "";
    try {
        message = fs.readFileSync("message.txt", "utf8");
    } catch (err) {}

    res.json({
        message,
        ...(rt ? {
            name: rt.user.name,
            username: rt.user.screen_name,
            image: rt.user.profile_image_url_https.replace("_normal", "")
        } : {
            name: "Alles",
            username: "AllesHQ",
            image: "https://files.alles.cc/Alles%20Logos/Rainbow%20(Dark).png"
        })
    });
});