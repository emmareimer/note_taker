const express = require('express');
const htmlRoutes = require('./html')
const app = express();
const apiRoutes = require('./api')

app.use('/', htmlRoutes);
app.use('/api', apiRoutes)

module.exports = app;