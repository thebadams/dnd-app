const express = require('express');
const mongoose = require('./mongoose');
const routes = require('../routes');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(routes);


module.exports = app;
