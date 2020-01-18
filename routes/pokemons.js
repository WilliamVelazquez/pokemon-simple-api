const express = require('express');
const Pokedex = require('pokedex-promise-v2');


function pokemonAPI(app) {
  const P = new Pokedex();
  const router = express.Router();
  app.use('/api/pokemons', router);

  router.get('/', async function(request, response, next) {
    try {
      const interval = {
        limit: parseInt(request.query.quantity, 10) || 10,
        offset: parseInt(request.query.initial, 10) || 1
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
      const pokemon = await P.getPokemonByName(request.params.id);
      response.status(200).json({
        data: pokemon,
        message: 'pokemon listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/info/:id', async function(request, response, next) {
    try {
      const pokemon = await P.getPokemonByName(request.params.id);
      const url = pokemon.species.url;
      const info = await P.resource(url);
      response.status(200).json({
        data: info,
        message: 'pokemon info listed',
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.get('/characteristic/:id', async function(request, response, next) {
    try {
      const characteristic = await P.getCharacteristicById(request.params.id);
      response.status(200).json({
        data: characteristic,
        message: 'characteristic listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/data', async function(request, response, next) {
    try {
      const data = await P.resource(request.query.path);
      response.status(200).json({
        data: data,
        message: 'data listed',
      });
    } catch (error) {
      next(error);
    }
  });
  
};

module.exports = pokemonAPI;