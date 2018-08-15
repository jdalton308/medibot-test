const express = require('express');
const app = express();
// const path = require('path');
const bodyParser = require('body-parser');


const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);



app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(bodyParser.json());
app.use(bodyParser.text());



app.get('*', function(req, res) {
  res.sendFile('dist/index.html', { root: __dirname });
});

app.post('/api/reverse', function(req, res) {
  const reversed = req.body.split('').reverse().join('');
  res.send(reversed);
});



app.listen(3000);