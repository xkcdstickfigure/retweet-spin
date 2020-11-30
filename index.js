require("dotenv").config();
const {
    TWEET,
    CONSUMER_KEY,
    CONSUMER_SECRET,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET
} = process.env;

const Twit = require("twit");
const t = new Twit({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    access_token: ACCESS_TOKEN,
    access_token_secret: ACCESS_TOKEN_SECRET
});

const getRetweeter = async () => (
    await t.get("users/show", {
        user_id: (
            await t.get("statuses/retweeters/ids", {
                id: TWEET,
                count: 1
            })
        ).data.ids[0]
    })
).data;

getRetweeter().then(console.log);