const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
var cors = require('cors')
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    var response = [];
    const allData = fs.readdirSync("./public/data").filter(file => path.extname(file) === ".json");
    console.log(allData);
    allData.map((person) => {
        const fileData = fs.readFileSync(path.join('./public/data', person));
        const personData = JSON.parse(fileData.toString());
        response.push(personData);
    });
    res.json(response);
});

app.get("/:username", (req, res) => {
    const filename = req.params.username + ".json";
    const data = fs.readFileSync(path.join('./public/data', filename));
    const parsedData = JSON.parse(data.toString());
    res.json(parsedData);
});

app.listen(3001, () => {
    console.log('express server listening on 3001');
});