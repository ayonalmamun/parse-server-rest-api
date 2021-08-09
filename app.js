const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const Parse = require('parse/node');

const app = express();

Parse.initialize('parse-rest-api');
Parse.serverURL = 'http://localhost:3000/parse';

const api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/parse-rest-api',
  appId: 'parse-rest-api',
  masterKey: '1234',
  serverURL: 'http://localhost:3000/parse'
});

app.use('/parse', api);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, function() {
  console.log('server running on port ' + port + '.');
});