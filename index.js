const express = require('express');

// initialize express app
const app = express();
require('./config/express')(app);

module.exports = app;
