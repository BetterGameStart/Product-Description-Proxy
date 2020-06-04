const nr = require('newrelic');

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();
const PORT = 3333;

const CART = 'http://bgs-a2c-service-38140710.us-east-1.elb.amazonaws.com/games/1/';
// const REVIEWS = 'http://3.17.206.247:3002/';
// const CAROUSEL = 'http://3.17.206.247:3003/';
const DETAILS = 'http://34.203.77.85:3004/';
// const RECOMMENDED = 'http://3.17.206.247:3005/';

app.listen(PORT, () => { console.log(`Now listening on port ${PORT}`); });

app.use('/games/:gameId', express.static('public/lib'));

app.all('/reviews/:gameId', jsonParser, (req, res) => {
  const METHOD = req.method;
  const BODY = req.body;
  axios({
    method: METHOD,
    url: `${REVIEWS}reviews/${req.params.gameId}`,
    data: JSON.stringify(BODY),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something went wrong!');
    });
});

app.all('/cartapi/:gameId', jsonParser, (req, res) => {
  const METHOD = req.method;
  const BODY = req.body;
  axios({
    method: METHOD,
    url: `${CART}cartapi/${req.params.gameId}`,
    data: JSON.stringify(BODY),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something went wrong!');
    });
});

app.all('/carousel/:gameId', jsonParser, (req, res) => {
  const METHOD = req.method;
  const BODY = req.body;
  axios({
    method: METHOD,
    url: `${CAROUSEL}carousel/${req.params.gameId}`,
    data: JSON.stringify(BODY),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something went wrong!');
    });
});

app.all('/recommended/', jsonParser, (req, res) => {
  const METHOD = req.method;
  const BODY = req.body;
  axios({
    method: METHOD,
    url: `${RECOMMENDED}recommended/`,
    data: JSON.stringify(BODY),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something went wrong!');
    });
});

app.all('/api/games/:gameId', jsonParser, (req, res) => {
  const METHOD = req.method;
  const BODY = req.body;
  axios({
    method: METHOD,
    url: `${DETAILS}api/games/${req.params.gameId}`,
    data: JSON.stringify(BODY),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something went wrong!');
    });
});