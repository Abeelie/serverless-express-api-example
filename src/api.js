const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        example: "API data"
    });
});


app.use(`/.netlify/functions/api`, router);

module.exports = app
module.exports.handler = serverless(app);

