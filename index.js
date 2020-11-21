const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const baseURL = "https://api.github.com/";

const getUser = async(name) => {
    // console.log(`${baseURL}users/${name}`);
    const res = await axios.get(`${baseURL}users/${name}`);
    // console.log(res);
    return res.data;
};

app.get('/user/:name', async(req, res) => {
    //console.log(req.params.name);
    const data = await getUser(req.params.name);
    //const json = await JSON.string(data);
    res.json(data);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.get('/user/:name', async(req, res) => {});