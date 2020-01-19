const Pokedex = require('pokedex-promise-v2');
// const { pokemonsMock, pokemonInfoMock } = require('../utils/mocks/pokemons');

class PokemonService {
	constructor (){
		this.P = new Pokedex();
	}

	async getPokemonsList(interval) {
		// const pokemons = await Promise.resolve(pokemonsMock);
		const pokemons = await this.P.getPokemonsList(interval);
		return pokemons || [];
	}

	async getPokemonByName(id) {
		// const pokemonInfo = await Promise.resolve(pokemonInfoMock);
		const pokemonInfo = await this.P.getPokemonByName(id);
		return pokemonInfo || {};
	}

	async getPokemonResource(url) {
		// const pokemonResource = await Promise.resolve(pokemonInfoMock);
		const pokemonResource = await this.P.resource(url);
		return pokemonResource || {};
	}

	async getCharacteristicById(id) {
		const characteristic = await this.P.getCharacteristicById(id);
		return characteristic || {};
	}
}

module.exports = PokemonService;