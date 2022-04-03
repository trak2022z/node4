//Exercise 1: Splendid Circles
'use strict';

const express = require('express');
const app = express();

//Exercise 1: Splendid Circles
// define endpoint for exercise 1 here
app.get('/math/circle/:r', function(req, res) {
  let radius = parseFloat(req.params['r']);
  let area = Math.PI * radius * radius;
  let circumference = Math.PI * radius * 2;
  res.json({'area': area, 'circumference': circumference});
});

// define endpoint for exercise 2 here


// define endpoint for exercise 3 here


// define endpoint for exercise 4 here

const PORT = process.env.PORT || 3000;
app.listen(PORT);
