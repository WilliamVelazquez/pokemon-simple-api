const express = require('express');
const PokemonService = require('../services/pokemons');

const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../utils/time');

function pokemonAPI(app) {
  const router = express.Router();
  app.use('/api/pokemons', router);

  const pokemonService = new PokemonService();

  router.get('/', async function(request, response, next) {
    cacheResponse(response, FIVE_MINUTES_IN_SECONDS);
    try {
      const { quantity, initial } = request.query;

      const interval = {
        limit: parseInt(quantity, 10) || 10,
        offset: parseInt(initial, 10) || 1
      }
      const pokemons = await pokemonService.getPokemonsList(interval);
      response.status(200).json({
        data: pokemons,
        message: 'pokemons listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async function(request, response, next) {
    cacheResponse(response, SIXTY_MINUTES_IN_SECONDS);
    try {
      const { id } = request.params;

      const pokemon = await pokemonService.getPokemonByName(id);
      response.status(200).json({
        data: pokemon,
        message: 'pokemon listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/info/:id', async function(request, response, next) {
    cacheResponse(response, SIXTY_MINUTES_IN_SECONDS);
    try {
      const { id } = request.params;

      const pokemon = await pokemonService.getPokemonByName(id);
      const url = pokemon.species.url;
      const info = await pokemonService.getPokemonResource(url);
      response.status(200).json({
        data: info,
        message: 'pokemon info listed',
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.get('/characteristic/:id', async function(request, response, next) {
    cacheResponse(response, SIXTY_MINUTES_IN_SECONDS);
    try {
      const { id } = request.params;
      
      const characteristic = await pokemonService.getCharacteristicById(id);
      response.status(200).json({
        data: characteristic,
        message: 'characteristic listed',
      });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = pokemonAPI;
