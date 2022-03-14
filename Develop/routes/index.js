const express = require('express');
const htmlRoutes = require('./html')
const app = express();

app.use('/', htmlRoutes);

module.exports = app;