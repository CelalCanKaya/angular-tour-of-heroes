import { PokemonTypes } from "./data/enums";

export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Bulbasaur', type: [PokemonTypes.Grass, PokemonTypes.Poison] },
      { id: 2, name: 'Ivysaur', type: [PokemonTypes.Grass, PokemonTypes.Poison] },
      { id: 3, name: 'Venusaur', type: [PokemonTypes.Grass, PokemonTypes.Poison] },
      { id: 4, name: 'Charmander', type: [PokemonTypes.Fire] },
      { id: 5, name: 'Charmeleon', type: [PokemonTypes.Fire] },
      { id: 6, name: 'Charizard', type: [PokemonTypes.Fire, PokemonTypes.Flying] },
      { id: 7, name: 'Squirtle', type: [PokemonTypes.Water] },
      { id: 8, name: 'Wartortle', type: [PokemonTypes.Water] },
      { id: 9, name: 'Blastoise', type: [PokemonTypes.Water] }
    ];
    return { heroes };
  }
}
