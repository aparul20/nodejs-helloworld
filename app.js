var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/team', function(req, res) {
  res.send('Aurora Team!\n');
  });

  app.get('/about', function(req, res) {
    res.send('Redhat Hackathon!\n');
    });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

