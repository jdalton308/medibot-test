const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');


const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);



app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(bodyParser.json());
app.use(bodyParser.text());



app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname });
});


app.post('/api/reverse', (req, res) => {
  const reversed = req.body.split('').reverse().join('');
  res.send(reversed);
});


app.post('/api/proxy', (req, res) => {
  const {
    url,
    method
  } = req.body;

  axios({
    url,
    method
  })
    .then((body) => {
      res.send(body.data);
    })
    .catch((error) => {
      console.log('\n\nFull Error:\n\n', error);
      res.status(500).send('Error making request to provided URL.');
    });
});



app.listen(3000);