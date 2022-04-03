//Exercise 1: Splendid Circles
'use strict';

const express = require('express');
const app = express();

//Exercise 1: Splendid Circles
// define endpoint for exercise 1 here
//https://node4.tomkrok1.repl.co/math/circle/1
app.get('/math/circle/:r', function(req, res) {
  let radius = parseFloat(req.params['r']);
  let area = Math.PI * radius * radius;
  let circumference = Math.PI * radius * 2;
  res.json({'area': area, 'circumference': circumference});
});

//Exercise 2: Radical Rectangles
// define endpoint for exercise 2 here
//https://node4.tomkrok1.repl.co/math/rectangle/5/5
app.get('/math/rectangle/:width/:height', function(req, res) {
  let width = parseFloat(req.params['width']);
  let height = parseFloat(req.params['height']);
  let area = width * height;
  let perimeter = (width + height) * 2;
  res.json({'area': area, 'perimeter': perimeter});
});


//Exercise 3: Hello, you!
// define endpoint for exercise 3 here
//https://node4.tomkrok1.repl.co/hello/name?first=Tom&last=Krok
app.get('/hello/name', function(req, res) {
  res.type('text');
  if (req.query['first'] && req.query['last']) {
    res.send('Hello ' + req.query['first'] + ' ' + req.query['last']);
  } else {
    let errorMsg = 'Error: missing ';
    if (!req.query['first']) {
      errorMsg += 'first';
      if (!req.query['last']) {
        errorMsg += ', ';
      }
    }
    if (!req.query['last']) {
      errorMsg += 'last';
    }
    res.status(400).send(errorMsg);
  }
});

// define endpoint for exercise 4 here

const PORT = process.env.PORT || 3000;
app.listen(PORT);
