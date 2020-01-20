const express = require('express');
const cors = require("cors");
const app = express();

const { config } = require('./config');
const pokemonsAPI = require('./routes/pokemons');

const corsOptions = { origin: "*" };

app.use(cors(corsOptions));

pokemonsAPI(app);

app.listen(config.port, function(){
  console.log(`Listening http://localhost:${config.port}`);
});
