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
      { id: 9, name: 'Blastoise', type: [PokemonTypes.Water] },
      { id: 10, name: 'Caterpie', type: [PokemonTypes.Bug] },
      { id: 11, name: 'Metapod', type: [PokemonTypes.Bug] },
      { id: 12, name: 'Butterfree', type: [PokemonTypes.Bug, PokemonTypes.Flying] },
      { id: 13, name: 'Weedle', type: [PokemonTypes.Bug, PokemonTypes.Poison] },
      { id: 14, name: 'Kakuna', type: [PokemonTypes.Bug, PokemonTypes.Poison] },
      { id: 15, name: 'Beedrill', type: [PokemonTypes.Bug, PokemonTypes.Poison] },
      { id: 16, name: 'Pidgey', type: [PokemonTypes.Normal, PokemonTypes.Flying] },
      { id: 17, name: 'Pidgeotto', type: [PokemonTypes.Normal, PokemonTypes.Flying] },
      { id: 18, name: 'Pidgeot', type: [PokemonTypes.Normal, PokemonTypes.Flying] },
      { id: 19, name: 'Rattata', type: [PokemonTypes.Normal] },
      { id: 20, name: 'Raticate', type: [PokemonTypes.Normal] },
      { id: 21, name: 'Spearow', type: [PokemonTypes.Normal, PokemonTypes.Flying] },
      { id: 22, name: 'Fearow', type: [PokemonTypes.Normal, PokemonTypes.Flying] },
      { id: 23, name: 'Ekans', type: [PokemonTypes.Poison] },
      { id: 24, name: 'Arbok', type: [PokemonTypes.Poison] },
      { id: 25, name: 'Pikachu', type: [PokemonTypes.Electric] },
      { id: 26, name: 'Raichu', type: [PokemonTypes.Electric] },
      { id: 27, name: 'Sandshrew', type: [PokemonTypes.Ground] },
      { id: 28, name: 'Sandslash', type: [PokemonTypes.Ground] }
    ];
    return { heroes };
  }
}
