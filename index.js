const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(request, response){
  response.send('Test');
});

app.get('/json', function(request, response){
  response.json({ test: 'Ok' });
});

app.listen(config.port, function(){
  console.log(`Listening http://localhost:${config.port}`);
});
