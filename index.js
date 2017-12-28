const express = require('express');
const fs = require('fs');

// initialize express app
const app = express();
require('./config/express')(app);

app.get('/data', (req, res) => {
  fs.readFile('./data/projectData.json', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(data);
  });
});

module.exports = app;
