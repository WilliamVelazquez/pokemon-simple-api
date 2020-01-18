const express = require('express');
const app = express();

const { config } = require('./config/index');
const pokemonsAPI = require('./routes/pokemons');

pokemonsAPI(app);

app.listen(config.port, function(){
  console.log(`Listening http://localhost:${config.port}`);
});
