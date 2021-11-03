const express = require('express');
const app =  express();
const routes = require ('./routes');
require('./database/index');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(express.json());
app.use(routes);
app.listen(3333);