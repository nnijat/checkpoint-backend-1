`use strict`
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const messageRoutes = require('../routes/messages');
const orderRoutes = require('../routes/orders');
const taskRoutes = require('../routes/tasks');
require('dotenv').config();

const thePort = 3001;
let app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(messageRoutes, orderRoutes, taskRoutes);

app.listen(thePort, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages on port", thePort);
});

const DB_CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true }, (err) => {
    console.log(err)
    console.log("Connected successfully to server");
});