const pokemonsMock = [
  { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
  { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
  { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
  { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
  { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
  { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
  { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
  { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' },
  { name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' }
];

class PokemonsServiceMock {
	async getPokemonsList(){
		return Promise.resolve(pokemonsMock);
	}

	async getPokemonByName(){
		return Promise.resolve(pokemonByNameMock);
	}

	async getPokemonResource(){
		return Promise.resolve(pokemonInfoMock);
	}
}

const pokemonByNameMock = {
  abilities: [
    {
      ability: {
        name: 'lightning-rod',
        url: 'https://pokeapi.co/api/v2/ability/31/'
      },
      is_hidden: true,
      slot: 3
    },
    {
      ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
      is_hidden: false,
      slot: 1
    }
  ],
  base_experience: 112,
  forms: [
    { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon-form/25/' }
  ],
  game_indices: [
    {
      game_index: 25,
      version: { name: 'white-2', url: 'https://pokeapi.co/api/v2/version/22/' }
    },
    {
      game_index: 25,
      version: { name: 'black-2', url: 'https://pokeapi.co/api/v2/version/21/' }
    },
    {
      game_index: 25,
      version: { name: 'white', url: 'https://pokeapi.co/api/v2/version/18/' }
    },
    {
      game_index: 25,
      version: { name: 'black', url: 'https://pokeapi.co/api/v2/version/17/' }
    },
    {
      game_index: 25,
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/'
      }
    },
    {
      game_index: 25,
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/'
      }
    },
    {
      game_index: 25,
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/'
      }
    },
    {
      game_index: 25,
      version: { name: 'pearl', url: 'https://pokeapi.co/api/v2/version/13/' }
    },
    {
      game_index: 25,
      version: { name: 'diamond', url: 'https://pokeapi.co/api/v2/version/12/' }
    },
    {
      game_index: 25,
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/'
      }
    },
    {
      game_index: 25,
      version: { name: 'firered', url: 'https://pokeapi.co/api/v2/version/10/' }
    },
    {
      game_index: 25,
      version: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version/9/' }
    },
    {
      game_index: 25,
      version: { name: 'sapphire', url: 'https://pokeapi.co/api/v2/version/8/' }
    },
    {
      game_index: 25,
      version: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' }
    },
    {
      game_index: 25,
      version: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version/6/' }
    },
    {
      game_index: 25,
      version: { name: 'silver', url: 'https://pokeapi.co/api/v2/version/5/' }
    },
    {
      game_index: 25,
      version: { name: 'gold', url: 'https://pokeapi.co/api/v2/version/4/' }
    },
    {
      game_index: 84,
      version: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version/3/' }
    },
    {
      game_index: 84,
      version: { name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/' }
    },
    {
      game_index: 84,
      version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' }
    }
  ],
  height: 4,
  held_items: [
    {
      item: { name: 'oran-berry', url: 'https://pokeapi.co/api/v2/item/132/' },
      version_details: [
        {
          rarity: 50,
          version: {
            name: 'white',
            url: 'https://pokeapi.co/api/v2/version/18/'
          }
        },
        {
          rarity: 50,
          version: {
            name: 'black',
            url: 'https://pokeapi.co/api/v2/version/17/'
          }
        },
        {
          rarity: 50,
          version: {
            name: 'soulsilver',
            url: 'https://pokeapi.co/api/v2/version/16/'
          }
        },
        {
          rarity: 50,
          version: {
            name: 'heartgold',
            url: 'https://pokeapi.co/api/v2/version/15/'
          }
        },
        {
          rarity: 50,
          version: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version/14/'
          }
        },
        {
          rarity: 50,
          version: {
            name: 'pearl',
            url: 'https://pokeapi.co/api/v2/version/13/'
          }
        },
        {
          rarity: 50,
          version: {
            name: 'diamond',
            url: 'https://pokeapi.co/api/v2/version/12/'
          }
        },
        {
          rarity: 50,
          version: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version/9/'
          }
        },
        {
          rarity: 50,
          version: {
            name: 'sapphire',
            url: 'https://pokeapi.co/api/v2/version/8/'
          }
        },
        {
          rarity: 50,
          version: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' }
        }
      ]
    },
    {
      item: { name: 'light-ball', url: 'https://pokeapi.co/api/v2/item/213/' },
      version_details: [
        {
          rarity: 5,
          version: {
            name: 'ultra-sun',
            url: 'https://pokeapi.co/api/v2/version/29/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'moon',
            url: 'https://pokeapi.co/api/v2/version/28/'
          }
        },
        {
          rarity: 5,
          version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' }
        },
        {
          rarity: 5,
          version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' }
        },
        {
          rarity: 5,
          version: {
            name: 'white-2',
            url: 'https://pokeapi.co/api/v2/version/22/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'black-2',
            url: 'https://pokeapi.co/api/v2/version/21/'
          }
        },
        {
          rarity: 1,
          version: {
            name: 'white',
            url: 'https://pokeapi.co/api/v2/version/18/'
          }
        },
        {
          rarity: 1,
          version: {
            name: 'black',
            url: 'https://pokeapi.co/api/v2/version/17/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'soulsilver',
            url: 'https://pokeapi.co/api/v2/version/16/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'heartgold',
            url: 'https://pokeapi.co/api/v2/version/15/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version/14/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'pearl',
            url: 'https://pokeapi.co/api/v2/version/13/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'diamond',
            url: 'https://pokeapi.co/api/v2/version/12/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version/9/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'sapphire',
            url: 'https://pokeapi.co/api/v2/version/8/'
          }
        },
        {
          rarity: 5,
          version: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' }
        }
      ]
    }
  ],
  id: 25,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/25/encounters',
  moves: [
    {
      move: { name: 'mega-punch', url: 'https://pokeapi.co/api/v2/move/5/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'pay-day', url: 'https://pokeapi.co/api/v2/move/6/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'thunder-punch', url: 'https://pokeapi.co/api/v2/move/9/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        }
      ]
    },
    {
      move: { name: 'slam', url: 'https://pokeapi.co/api/v2/move/21/' },
      version_group_details: [
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: { name: 'mega-kick', url: 'https://pokeapi.co/api/v2/move/25/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'headbutt', url: 'https://pokeapi.co/api/v2/move/29/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        }
      ]
    },
    {
      move: { name: 'body-slam', url: 'https://pokeapi.co/api/v2/move/34/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'take-down', url: 'https://pokeapi.co/api/v2/move/36/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'double-edge', url: 'https://pokeapi.co/api/v2/move/38/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'tail-whip', url: 'https://pokeapi.co/api/v2/move/39/' },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: { name: 'growl', url: 'https://pokeapi.co/api/v2/move/45/' },
      version_group_details: [
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'surf', url: 'https://pokeapi.co/api/v2/move/57/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'stadium-surfing-pikachu',
            url: 'https://pokeapi.co/api/v2/move-learn-method/5/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'stadium-surfing-pikachu',
            url: 'https://pokeapi.co/api/v2/move-learn-method/5/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'submission', url: 'https://pokeapi.co/api/v2/move/66/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'counter', url: 'https://pokeapi.co/api/v2/move/68/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        }
      ]
    },
    {
      move: { name: 'seismic-toss', url: 'https://pokeapi.co/api/v2/move/69/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'strength', url: 'https://pokeapi.co/api/v2/move/70/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: {
        name: 'thunder-shock',
        url: 'https://pokeapi.co/api/v2/move/84/'
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'thunderbolt', url: 'https://pokeapi.co/api/v2/move/85/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'thunder-wave', url: 'https://pokeapi.co/api/v2/move/86/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'thunder', url: 'https://pokeapi.co/api/v2/move/87/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'dig', url: 'https://pokeapi.co/api/v2/move/91/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'toxic', url: 'https://pokeapi.co/api/v2/move/92/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'agility', url: 'https://pokeapi.co/api/v2/move/97/' },
      version_group_details: [
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'quick-attack', url: 'https://pokeapi.co/api/v2/move/98/' },
      version_group_details: [
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'rage', url: 'https://pokeapi.co/api/v2/move/99/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'mimic', url: 'https://pokeapi.co/api/v2/move/102/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'double-team', url: 'https://pokeapi.co/api/v2/move/104/' },
      version_group_details: [
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: {
        name: 'defense-curl',
        url: 'https://pokeapi.co/api/v2/move/111/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        }
      ]
    },
    {
      move: {
        name: 'light-screen',
        url: 'https://pokeapi.co/api/v2/move/113/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'reflect', url: 'https://pokeapi.co/api/v2/move/115/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'bide', url: 'https://pokeapi.co/api/v2/move/117/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'swift', url: 'https://pokeapi.co/api/v2/move/129/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'skull-bash', url: 'https://pokeapi.co/api/v2/move/130/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'flash', url: 'https://pokeapi.co/api/v2/move/148/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'rest', url: 'https://pokeapi.co/api/v2/move/156/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'substitute', url: 'https://pokeapi.co/api/v2/move/164/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    },
    {
      move: { name: 'snore', url: 'https://pokeapi.co/api/v2/move/173/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        }
      ]
    },
    {
      move: { name: 'curse', url: 'https://pokeapi.co/api/v2/move/174/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        }
      ]
    },
    {
      move: { name: 'protect', url: 'https://pokeapi.co/api/v2/move/182/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'mud-slap', url: 'https://pokeapi.co/api/v2/move/189/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        }
      ]
    },
    {
      move: { name: 'zap-cannon', url: 'https://pokeapi.co/api/v2/move/192/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        }
      ]
    },
    {
      move: { name: 'detect', url: 'https://pokeapi.co/api/v2/move/197/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        }
      ]
    },
    {
      move: { name: 'endure', url: 'https://pokeapi.co/api/v2/move/203/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'rollout', url: 'https://pokeapi.co/api/v2/move/205/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        }
      ]
    },
    {
      move: { name: 'swagger', url: 'https://pokeapi.co/api/v2/move/207/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'spark', url: 'https://pokeapi.co/api/v2/move/209/' },
      version_group_details: [
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: { name: 'attract', url: 'https://pokeapi.co/api/v2/move/213/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'sleep-talk', url: 'https://pokeapi.co/api/v2/move/214/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'return', url: 'https://pokeapi.co/api/v2/move/216/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'frustration', url: 'https://pokeapi.co/api/v2/move/218/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: {
        name: 'dynamic-punch',
        url: 'https://pokeapi.co/api/v2/move/223/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        }
      ]
    },
    {
      move: { name: 'iron-tail', url: 'https://pokeapi.co/api/v2/move/231/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: {
        name: 'hidden-power',
        url: 'https://pokeapi.co/api/v2/move/237/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'rain-dance', url: 'https://pokeapi.co/api/v2/move/240/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'rock-smash', url: 'https://pokeapi.co/api/v2/move/249/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'facade', url: 'https://pokeapi.co/api/v2/move/263/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'focus-punch', url: 'https://pokeapi.co/api/v2/move/264/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: {
        name: 'helping-hand',
        url: 'https://pokeapi.co/api/v2/move/270/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        }
      ]
    },
    {
      move: { name: 'brick-break', url: 'https://pokeapi.co/api/v2/move/280/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        }
      ]
    },
    {
      move: { name: 'knock-off', url: 'https://pokeapi.co/api/v2/move/282/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        }
      ]
    },
    {
      move: {
        name: 'secret-power',
        url: 'https://pokeapi.co/api/v2/move/290/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        }
      ]
    },
    {
      move: { name: 'signal-beam', url: 'https://pokeapi.co/api/v2/move/324/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        }
      ]
    },
    {
      move: { name: 'covet', url: 'https://pokeapi.co/api/v2/move/343/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        }
      ]
    },
    {
      move: { name: 'shock-wave', url: 'https://pokeapi.co/api/v2/move/351/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        }
      ]
    },
    {
      move: {
        name: 'natural-gift',
        url: 'https://pokeapi.co/api/v2/move/363/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'feint', url: 'https://pokeapi.co/api/v2/move/364/' },
      version_group_details: [
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'fling', url: 'https://pokeapi.co/api/v2/move/374/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'magnet-rise', url: 'https://pokeapi.co/api/v2/move/393/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        }
      ]
    },
    {
      move: { name: 'discharge', url: 'https://pokeapi.co/api/v2/move/435/' },
      version_group_details: [
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'captivate', url: 'https://pokeapi.co/api/v2/move/445/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'grass-knot', url: 'https://pokeapi.co/api/v2/move/447/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: { name: 'charge-beam', url: 'https://pokeapi.co/api/v2/move/451/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        }
      ]
    },
    {
      move: {
        name: 'electro-ball',
        url: 'https://pokeapi.co/api/v2/move/486/'
      },
      version_group_details: [
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        }
      ]
    },
    {
      move: { name: 'round', url: 'https://pokeapi.co/api/v2/move/496/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        }
      ]
    },
    {
      move: {
        name: 'echoed-voice',
        url: 'https://pokeapi.co/api/v2/move/497/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        }
      ]
    },
    {
      move: { name: 'volt-switch', url: 'https://pokeapi.co/api/v2/move/521/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        }
      ]
    },
    {
      move: { name: 'electroweb', url: 'https://pokeapi.co/api/v2/move/527/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        }
      ]
    },
    {
      move: { name: 'wild-charge', url: 'https://pokeapi.co/api/v2/move/528/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        }
      ]
    },
    {
      move: { name: 'play-nice', url: 'https://pokeapi.co/api/v2/move/589/' },
      version_group_details: [
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: { name: 'confide', url: 'https://pokeapi.co/api/v2/move/590/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        }
      ]
    },
    {
      move: { name: 'nuzzle', url: 'https://pokeapi.co/api/v2/move/609/' },
      version_group_details: [
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        }
      ]
    }
  ],
  name: 'pikachu',
  order: 35,
  species: {
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon-species/25/'
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
    back_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
    back_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    front_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
    front_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png'
  },
  stats: [
    {
      base_stat: 90,
      effort: 2,
      stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' }
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/'
      }
    },
    {
      base_stat: 50,
      effort: 0,
      stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' }
    },
    {
      base_stat: 40,
      effort: 0,
      stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' }
    },
    {
      base_stat: 55,
      effort: 0,
      stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' }
    },
    {
      base_stat: 35,
      effort: 0,
      stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' }
    }
  ],
  types: [
    {
      slot: 1,
      type: { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' }
    }
  ],
  weight: 60
};

const pokemonInfoMock = {
  base_happiness: 70,
  capture_rate: 190,
  color: { name: 'yellow', url: 'https://pokeapi.co/api/v2/pokemon-color/10/' },
  egg_groups: [
    { name: 'fairy', url: 'https://pokeapi.co/api/v2/egg-group/6/' },
    { name: 'ground', url: 'https://pokeapi.co/api/v2/egg-group/5/' }
  ],
  evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/10/' },
  evolves_from_species: {
    name: 'pichu',
    url: 'https://pokeapi.co/api/v2/pokemon-species/172/'
  },
  flavor_text_entries: [
    {
      flavor_text:
        '有积存电力的特质。\n在皮卡丘群居的森林里\n会落雷不断，十分危险。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/'
      },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        '電気を　ため込む　性質。\nピカチュウが　群れて　暮らす　森は\n落雷が　絶えず　危険だ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        'Its nature is to store up electricity. Forests\nwhere nests of Pikachu live are dangerous,\nsince the trees are so often struck by lightning.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        'Accumula naturalmente elettricità. I boschi\npopolati da gruppi di Pikachu sono pericolosi\nperché continuamente colpiti dai fulmini.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        'Acumulan electricidad de forma natural. Los\nbosques donde habitan en grupos están en\npeligro constante de ser alcanzados por rayos.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        'Es liegt in seiner Natur, konstant Elektrizität zu\nspeichern. Die Wälder, in denen Pikachu leben,\nbergen stets die Gefahr eines Blitzgewitters.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        'Son corps peut accumuler de l’électricité.\nLes forêts abritant des groupes de Pikachu\nsont d’ailleurs souvent frappées par la foudre.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        '擁有儲蓄電力的特性。\n皮卡丘群居的森林裡\n會不斷落雷，十分危險。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/'
      },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        '전기를 모으는 성질을 띠고 있다.\n피카츄가 무리 지어 사는 숲은\n낙뢰가 끊이지 않아 위험하다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        'でんきを　ためこむ　せいしつ。\nピカチュウが　むれて　くらす　もりは\nらくらいが　たえず　キケンだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/'
      },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/'
      }
    },
    {
      flavor_text:
        '有积聚电力的特质。\n不时常尽情释放电力的话，\n就会倍感压力。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/'
      },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        '電気を　溜める　性質。\n時々　思い切り　放電\nしないと　ストレスを　感じる。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        'It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        'Accumula naturalmente elettricità. Se ogni tanto\nnon si sfoga emettendo scariche elettriche,\nrischia di essere sopraffatto dallo stress.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        'Pikachu almacena electricidad en su cuerpo.\nSi no la libera de vez en cuando y se desfoga,\npuede sufrir estrés.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        'Es liegt in seiner Natur, konstant Elektrizität in\nsich anzustauen. Kann es diese nicht regelmäßig\nentladen, löst dies Stress aus.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        'Un Pokémon capable de condenser l’électricité.\nIl doit décharger l’énergie accumulée de temps\nen temps au risque d’accroître son stress.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        '有積聚電力的特質。\n不時常盡情釋放電力的話，\n就會倍感壓力。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/'
      },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        '전기를 모으는 성질을 가졌다.\n가끔 마음껏 방전하지\n않으면 스트레스를 받는다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        'でんきを　ためる　せいしつ。\nときどき　おもいきり　ほうでん\nしないと　ストレスを　かんじる。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/'
      },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' }
    },
    {
      flavor_text:
        'ほっぺの　電気袋の　電気は　真夜中\n寝ている　間に　ためられている　らしいよ。\n寝ぼけて　放電してしまう　ことが　ある。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/'
      }
    },
    {
      flavor_text:
        'This Pokémon has electricity-storing pouches on its cheeks.\nThese appear to become electrically charged during the night\nwhile Pikachu sleeps. It occasionally discharges electricity\nwhen it is dozy after waking up.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/'
      }
    },
    {
      flavor_text:
        'Pikachu immagazzina l’elettricità nelle guance. Pare che\nqueste si ricarichino durante la notte quando dorme.\nTalvolta emette delle scariche elettriche al risveglio mentre\nè ancora assonnato.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/'
      }
    },
    {
      flavor_text:
        'Este Pokémon tiene unas bolsas en las mejillas donde\nalmacena electricidad. Parece ser que se recargan por la\nnoche, mientras Pikachu duerme. A veces, cuando se acaba\nde despertar y está aún medio dormido, descarga un poco.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/'
      }
    },
    {
      flavor_text:
        'Dieses Pokémon kann in seinen Backentaschen Elektrizität\nspeichern. Diese laden sich nachts auf, während Pikachu\nschläft. Es entlädt manchmal seine elektrische Ladung,\nwenn es gerade aufgewacht und noch schläfrig ist.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/'
      }
    },
    {
      flavor_text:
        'Ce Pokémon dispose de petites poches dans les joues pour\nstocker de l’électricité. Elles semblent se charger pendant\nque Pikachu dort. Il libère parfois un peu d’électricité\nlorsqu’il n’est pas encore bien réveillé.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/'
      }
    },
    {
      flavor_text:
        '뺨의 전기 주머니에 있는 전기는 한밤중\n자는 동안 축적되는 것 같다.\n잠이 덜 깨서 방전하기도 한다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/'
      }
    },
    {
      flavor_text:
        'ほっぺの　でんきぶくろの　でんきは　まよなか\nねている　あいだに　ためられている　らしいよ。\nねぼけて　ほうでんしてしまう　ことが　ある。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/'
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/'
      }
    },
    {
      flavor_text:
        'はじめて　 る　ものには　電撃を　当てる。\n黒こげの　きの が　落ちていたら　それは\n電撃の　強さを　間違えた　証拠だよ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/'
      }
    },
    {
      flavor_text:
        'Whenever Pikachu comes across something new,\nit blasts it with a jolt of electricity. If you come across a\nblackened berry, it’s evidence that this Pokémon mistook the\nintensity of its charge.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/'
      }
    },
    {
      flavor_text:
        'Quando Pikachu incontra qualcosa che non conosce, lo\ncolpisce con una scarica elettrica. Quando si vede una bacca\nannerita, è evidente che questo Pokémon ha emesso una\nscossa troppo forte.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/'
      }
    },
    {
      flavor_text:
        'Cada vez que un Pikachu se encuentra con algo nuevo, le\nlanza una descarga eléctrica. Cuando se ve alguna baya\nchamuscada, es muy probable que sea obra de un Pikachu,\nya que a veces no controlan la intensidad de la descarga.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/'
      }
    },
    {
      flavor_text:
        'Immer wenn Pikachu auf etwas Neues stößt, jagt es\neinen Elektroschock hindurch. Wenn du eine verkohlte\nBeere findest, hat dieses Pokémon seine elektrische\nLadung falsch eingeschätzt.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/'
      }
    },
    {
      flavor_text:
        'Chaque fois que Pikachu découvre quelque chose de\nnouveau, il envoie un arc électrique. Lorsqu’on tombe\nsur une Baie carbonisée, ça signifie sans doute qu’un\nde ces Pokémon a envoyé une charge trop forte.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/'
      }
    },
    {
      flavor_text:
        '처음 보는 것에게는 전격을 맞춘다.\n새까맣게 탄 나무열매가 떨어져 있다는 것은\n전격의 세기를 조절하지 못했다는 증거다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/'
      }
    },
    {
      flavor_text:
        'はじめて　 る　ものには　でんげきを　あてる。\nくろこげの　きの が　おちていたら　それは\nでんげきの　つよさを　まちがえた　しょうこだよ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/'
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/'
      }
    },
    {
      flavor_text:
        'ほっぺたの　両側に\n小さい　電気袋を　持つ。\nピンチのときに　放電する。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' }
    },
    {
      flavor_text:
        'It has small electric sacs on both its cheeks.\nIf threatened, it looses electric charges from\nthe sacs.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' }
    },
    {
      flavor_text:
        'Se spaventato, perde scariche elettriche dalle due\nsacche che ha sulle guance.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' }
    },
    {
      flavor_text:
        'Las bolsas de las mejillas están llenas de electricidad,\nque libera cuando se siente amenazado.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' }
    },
    {
      flavor_text:
        'Es hat kleine Backentaschen, die mit Elektrizität\ngefüllt sind. Bei Gefahr entlädt es sie.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' }
    },
    {
      flavor_text:
        'Pikachu a de petites poches pleines d’électricité sur\nses joues. S’il se sent menacé, il laisse s’échapper\ndes décharges électriques.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' }
    },
    {
      flavor_text:
        '뺨의 양쪽에\n작은 전기 주머니가 있다.\n위기 상황일 때 방전한다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' }
    },
    {
      flavor_text:
        'ほっぺたの　りょうがわに\nちいさい　でんきぶくろを　もつ。\nピンチのときに　ほうでんする。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/'
      },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' }
    },
    {
      flavor_text:
        '尻尾を　立てて　まわりの　様子を\n探っていると　ときどき\n雷が　尻尾に　落ちてくる。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' }
    },
    {
      flavor_text:
        'It raises its tail to check its surroundings.\nThe tail is sometimes struck by lightning\nin this pose.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' }
    },
    {
      flavor_text:
        'Solleva la coda per esaminare l’ambiente circostante.\nA volte la coda è colpita da un fulmine quando è in\nquesta posizione.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' }
    },
    {
      flavor_text:
        'Levanta su cola para vigilar los alrededores. A veces,\npuede ser alcanzado por un rayo en esa pose.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' }
    },
    {
      flavor_text:
        'Es streckt seinen Schweif nach oben, um seine\nUmgebung zu prüfen. Häufig fährt ein Blitz hinein.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' }
    },
    {
      flavor_text:
        'Il élève sa queue pour surveiller les environs.\nElle attire souvent la foudre dans cette position.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' }
    },
    {
      flavor_text:
        '꼬리를 세우고 주변의\n상황을 살피다 보면 가끔\n꼬리에 번개가 친다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' }
    },
    {
      flavor_text:
        'しっぽを　たてて　まわりの\nようすを　さぐっていると　ときどき\nかみなりが　しっぽに　おちてくる。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/'
      },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' }
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'white-2', url: 'https://pokeapi.co/api/v2/version/22/' }
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'black-2', url: 'https://pokeapi.co/api/v2/version/21/' }
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'white', url: 'https://pokeapi.co/api/v2/version/18/' }
    },
    {
      flavor_text:
        'Il lui arrive de remettre d’aplomb\nun Pikachu allié en lui envoyant\nune décharge électrique.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'white', url: 'https://pokeapi.co/api/v2/version/18/' }
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'black', url: 'https://pokeapi.co/api/v2/version/17/' }
    },
    {
      flavor_text:
        'Il lui arrive de remettre d’aplomb\nun Pikachu allié en lui envoyant\nune décharge électrique.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'black', url: 'https://pokeapi.co/api/v2/version/17/' }
    },
    {
      flavor_text:
        'It raises its tail to check its\nsurroundings. The tail is sometimes\nstruck by lightning in this pose.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/'
      }
    },
    {
      flavor_text:
        'This intelligent Pokémon roasts\nhard berries with electricity to\nmake them tender enough to eat.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/'
      }
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow PIKACHU\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/'
      }
    },
    {
      flavor_text:
        'If it looses crackling power from\nthe electric pouches on its\ncheeks, it is being wary.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'pearl', url: 'https://pokeapi.co/api/v2/version/13/' }
    },
    {
      flavor_text:
        'It lives in forests with others.\nIt stores electricity in the\npouches on its cheeks.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'diamond', url: 'https://pokeapi.co/api/v2/version/12/' }
    },
    {
      flavor_text:
        'When several of these POKéMON gather,\ntheir electricity can build and cause\nlightning storms.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/'
      }
    },
    {
      flavor_text:
        'It has small electric sacs on both its\ncheeks. If threatened, it looses electric\ncharges from the sacs.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'firered', url: 'https://pokeapi.co/api/v2/version/10/' }
    },
    {
      flavor_text:
        'It stores electricity in the electric sacs\non its cheeks. When it releases pent-up\nenergy in a burst, the electric power is\nequal to a lightning bolt.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version/9/' }
    },
    {
      flavor_text:
        'This POKéMON has electricity-storing\npouches on its cheeks. These appear to\nbecome electrically charged during the\fnight while PIKACHU sleeps.\nIt occasionally discharges electricity\nwhen it is dozy after waking up.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sapphire', url: 'https://pokeapi.co/api/v2/version/8/' }
    },
    {
      flavor_text:
        'Whenever PIKACHU comes across\nsomething new, it blasts it with a jolt\nof electricity.\fIf you come across a blackened berry,\nit’s evidence that this POKéMON\nmistook the intensity of its charge.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' }
    },
    {
      flavor_text:
        'When it is anger­\ned, it immediately\ndischarges the\fenergy stored in\nthe pouches in its\ncheeks.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version/6/' }
    },
    {
      flavor_text:
        'It raises its tail\nto check its sur­\nroundings. The\ftail is sometimes\nstruck by light­\nning in this pose.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'silver', url: 'https://pokeapi.co/api/v2/version/5/' }
    },
    {
      flavor_text:
        'This intelligent\nPOKéMON roasts\nhard BERRIES with\felectricity to\nmake them tender\nenough to eat.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'gold', url: 'https://pokeapi.co/api/v2/version/4/' }
    },
    {
      flavor_text:
        'It keeps its tail\nraised to monitor\nits surroundings.\fIf you yank its\ntail, it will try\nto bite you.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version/3/' }
    },
    {
      flavor_text:
        'When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/' }
    },
    {
      flavor_text:
        'When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' }
    }
  ],
  form_descriptions: [],
  forms_switchable: false,
  gender_rate: 4,
  genera: [
    {
      genus: '鼠宝可梦',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/'
      }
    },
    {
      genus: 'ねずみポケモン',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' }
    },
    {
      genus: 'Mouse Pokémon',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' }
    },
    {
      genus: 'Pokémon Topo',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' }
    },
    {
      genus: 'Pokémon Ratón',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' }
    },
    {
      genus: 'Maus',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' }
    },
    {
      genus: 'Pokémon Souris',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' }
    },
    {
      genus: '鼠寶可夢',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/'
      }
    },
    {
      genus: '쥐포켓몬',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' }
    },
    {
      genus: 'ねずみポケモン',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/'
      }
    }
  ],
  generation: {
    name: 'generation-i',
    url: 'https://pokeapi.co/api/v2/generation/1/'
  },
  growth_rate: {
    name: 'medium',
    url: 'https://pokeapi.co/api/v2/growth-rate/2/'
  },
  habitat: {
    name: 'forest',
    url: 'https://pokeapi.co/api/v2/pokemon-habitat/2/'
  },
  has_gender_differences: true,
  hatch_counter: 10,
  id: 25,
  is_baby: false,
  name: 'pikachu',
  names: [
    {
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/'
      },
      name: '皮卡丘'
    },
    {
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      name: 'ピカチュウ'
    },
    {
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      name: 'Pikachu'
    },
    {
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      name: 'Pikachu'
    },
    {
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      name: 'Pikachu'
    },
    {
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      name: 'Pikachu'
    },
    {
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      name: 'Pikachu'
    },
    {
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/'
      },
      name: '皮卡丘'
    },
    {
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      name: '피카츄'
    },
    {
      language: {
        name: 'roomaji',
        url: 'https://pokeapi.co/api/v2/language/2/'
      },
      name: 'Pikachu'
    },
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/'
      },
      name: 'ピカチュウ'
    }
  ],
  order: 26,
  pal_park_encounters: [
    {
      area: {
        name: 'forest',
        url: 'https://pokeapi.co/api/v2/pal-park-area/1/'
      },
      base_score: 80,
      rate: 10
    }
  ],
  pokedex_numbers: [
    {
      entry_number: 163,
      pokedex: {
        name: 'updated-hoenn',
        url: 'https://pokeapi.co/api/v2/pokedex/15/'
      }
    },
    {
      entry_number: 36,
      pokedex: {
        name: 'kalos-central',
        url: 'https://pokeapi.co/api/v2/pokedex/12/'
      }
    },
    {
      entry_number: 16,
      pokedex: {
        name: 'conquest-gallery',
        url: 'https://pokeapi.co/api/v2/pokedex/11/'
      }
    },
    {
      entry_number: 22,
      pokedex: {
        name: 'updated-johto',
        url: 'https://pokeapi.co/api/v2/pokedex/7/'
      }
    },
    {
      entry_number: 104,
      pokedex: {
        name: 'extended-sinnoh',
        url: 'https://pokeapi.co/api/v2/pokedex/6/'
      }
    },
    {
      entry_number: 104,
      pokedex: {
        name: 'original-sinnoh',
        url: 'https://pokeapi.co/api/v2/pokedex/5/'
      }
    },
    {
      entry_number: 156,
      pokedex: { name: 'hoenn', url: 'https://pokeapi.co/api/v2/pokedex/4/' }
    },
    {
      entry_number: 22,
      pokedex: {
        name: 'original-johto',
        url: 'https://pokeapi.co/api/v2/pokedex/3/'
      }
    },
    {
      entry_number: 25,
      pokedex: { name: 'kanto', url: 'https://pokeapi.co/api/v2/pokedex/2/' }
    },
    {
      entry_number: 25,
      pokedex: { name: 'national', url: 'https://pokeapi.co/api/v2/pokedex/1/' }
    }
  ],
  shape: {
    name: 'quadruped',
    url: 'https://pokeapi.co/api/v2/pokemon-shape/8/'
  },
  varieties: [
    {
      is_default: true,
      pokemon: { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-rock-star',
        url: 'https://pokeapi.co/api/v2/pokemon/10080/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-belle',
        url: 'https://pokeapi.co/api/v2/pokemon/10081/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-pop-star',
        url: 'https://pokeapi.co/api/v2/pokemon/10082/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-phd',
        url: 'https://pokeapi.co/api/v2/pokemon/10083/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-libre',
        url: 'https://pokeapi.co/api/v2/pokemon/10084/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-cosplay',
        url: 'https://pokeapi.co/api/v2/pokemon/10085/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-original-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10094/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-hoenn-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10095/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-sinnoh-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10096/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-unova-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10097/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-kalos-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10098/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-alola-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10099/'
      }
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-partner-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10148/'
      }
    }
  ]
};

module.exports = {
	pokemonsMock,
	pokemonInfoMock,
	pokemonByNameMock,
	PokemonsServiceMock,
};