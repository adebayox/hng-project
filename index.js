const express = require('express');
const importData = require("./data.json");

const app = express();

//api endpoint
app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/api', (req, res) => {
    res.send(importData);
});

app.listen(2000, console.log("server is listening"))