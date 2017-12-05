const express = require('express');
const axios = require('axios');
const transformEvents = require('./transform-events.js')
const app = express();

const FOODTRUCK_API_URL = 'https://www.bestfoodtrucks.com/api/events/events/?when=today';

app.get('/data', (req, res, next) => {
  axios.get(FOODTRUCK_API_URL).then(response => {
    const events = transformEvents(response.data);
    res.send(events);
  }).catch(err => {
    next(err);
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

// Modern JS features:
// - Arrow functions
// - Promises
// - Template string
