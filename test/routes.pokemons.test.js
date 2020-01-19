const assert = require('assert');
const proxyquire = require('proxyquire');

const { pokemonsMock, pokemonInfoMock, pokemonByNameMock, PokemonsServiceMock } = require('../utils/mocks/pokemons');
const testServer = require('../utils/testServer');

describe('routes - pokemons', function(){
	const route = proxyquire('../routes/pokemons',{
		'../services/pokemons': PokemonsServiceMock
	});

	const request = testServer(route);
	
	describe('GET /api/pokemons', function(){
		it('should respond with status 200', function(done) {
			request.get('/api/pokemons').expect(200, done);
		})

		it('should respond with the list of pokemons', function(done) {
			request.get('/api/pokemons').end((error, response) => {
				assert.deepEqual(
					response.body, 
					{
						data: pokemonsMock,
						message: 'pokemons listed'
					}
				);

				done();
			});
		})
	});

	describe('GET /api/pokemons/:id', function(){
		it('should respond with status 200', function(done) {
			request.get('/api/pokemons/25').expect(200, done);
		})

		it('should respond with the pokemon data', function(done) {
			request.get('/api/pokemons/25').end((error, response) => {
				assert.deepEqual(
					response.body, 
					{
						data: pokemonByNameMock,
						message: 'pokemon listed'
					}
				);

				done();
			});
		})
	});

	describe('GET /api/pokemons/info/:id', function(){
		it('should respond with status 200', function(done) {
			request.get('/api/pokemons/info/25').expect(200, done);
		})

		it('should respond with the pokemon information', function(done) {
			request.get('/api/pokemons/info/25').end((error, response) => {
				assert.deepEqual(
					response.body, 
					{
						data: pokemonInfoMock,
						message: 'pokemon info listed'
					}
				);

				done();
			});
		})
	});
});