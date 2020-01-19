const express = require('express');
// const Pokedex = require('pokedex-promise-v2');
const PokemonService = require('../services/pokemons');

function pokemonAPI(app) {
  // const P = new Pokedex();
  const router = express.Router();
  app.use('/api/pokemons', router);

  const pokemonService = new PokemonService();

  router.get('/', async function(request, response, next) {
    try {
      const { quantity, initial } = request.query;

      const interval = {
        limit: parseInt(quantity, 10) || 10,
        offset: parseInt(initial, 10) || 1
      }
      // const pokemons = await P.getPokemonsList(interval);
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
    try {
      const { id } = request.params;

      // const pokemon = await P.getPokemonByName(id);
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
    try {
      const { id } = request.params;

      // const pokemon = await P.getPokemonByName(id);
      const pokemon = await pokemonService.getPokemonByName(id);
      const url = pokemon.species.url;
      // const info = await P.resource(url);
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
    try {
      const { id } = request.params;
      
      // const characteristic = await P.getCharacteristicById(id);
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
