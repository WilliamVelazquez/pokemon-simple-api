const express = require('express');
const Pokedex = require('pokedex-promise-v2');


function pokemonAPI(app) {
  const P = new Pokedex();
  const router = express.Router();
  app.use('/api/pokemons', router);

  router.get('/', async function(request, response, next) {
    try {
      const interval = {
        limit: 10,
        offset: 1
      }
      const pokemons = await P.getPokemonsList(interval);
      response.status(200).json({
        data: pokemons,
        message: 'pokemons listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async function(request, response, next) {
    try {
      const pokemons = await P.getPokemonByName(request.params.id);
      response.status(200).json({
        data: pokemons,
        message: 'pokemon listed',
      });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = pokemonAPI;