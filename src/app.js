require('env2')('.env');
const express = require('express');
const path = require('path');
const compression = require('compression');

const routes = require('./routes');

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
