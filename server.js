const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();


spawn('./bin/redis/redis-server.exe');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./src/controllers'));

const server = app.listen(8081, () => {
  const { port } = server.address();

  console.log(`server listening at port ${port}`);
});

module.exports = server;
