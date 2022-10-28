const express = require('express');

const serverless = require('serverless-http');

const importData = require("../data.json");

const router = express.Router();

const app = express();

//api endpoint
router.get('/', (req, res) => {
    res.json ("hello world");
});

router.get('/endpoint', (req, res) => {
    res.json(importData);
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);

