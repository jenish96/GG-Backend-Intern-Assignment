const express = require('express');
const { addEvent, findEvents } = require('../controller/eventController');
const app = express();

app.post("/events", addEvent);
app.get("/events/find", findEvents);


module.exports = app