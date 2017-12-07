const express = require('express');
const axios = require('axios');
const app = express();

const FOODTRUCK_API_URL = 'https://www.bestfoodtrucks.com/api/events/events/?when=today';

app.get('/events', (req, res, next) => {
  axios.get(FOODTRUCK_API_URL).then(response => {
    const events = response.data;
    res.send(events);
  }).catch(err => {
    next(err);
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
