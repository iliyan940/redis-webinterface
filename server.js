/* eslint-disable */
const express = require('express');
var bodyParser = require('body-parser');
const exec = require('child_process').execFile;

const app = express();

exec('./bin/redis/redis-server.exe');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./src/controllers'));

const server = app.listen(8081, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('server listening at http://%s:%s', host, port);
});

// https://www.terlici.com/2014/08/25/best-practices-express-structure.html
//https://www.youtube.com/watch?v=7bE2mI4ePeU