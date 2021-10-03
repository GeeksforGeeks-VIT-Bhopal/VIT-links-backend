const express = require('express');
const axios = require('axios');
const app = express();

app.get("/", (req, res) => {
    res.json({"name": "Sajal"});
});

app.listen(3001, () => {
    console.log('express server listening on 3001');
});