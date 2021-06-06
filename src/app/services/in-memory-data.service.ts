import { PokeTypeEnum } from "../data/enums";

export class InMemoryDataService {
  createDb() {
    const pokemons = [
      { id: 1, name: 'Bulbasaur', type: [PokeTypeEnum.Grass, PokeTypeEnum.Poison] },
      { id: 2, name: 'Ivysaur', type: [PokeTypeEnum.Grass, PokeTypeEnum.Poison] },
      { id: 3, name: 'Venusaur', type: [PokeTypeEnum.Grass, PokeTypeEnum.Poison] },
      { id: 4, name: 'Charmander', type: [PokeTypeEnum.Fire] },
      { id: 5, name: 'Charmeleon', type: [PokeTypeEnum.Fire] },
      { id: 6, name: 'Charizard', type: [PokeTypeEnum.Fire, PokeTypeEnum.Flying] },
      { id: 7, name: 'Squirtle', type: [PokeTypeEnum.Water] },
      { id: 8, name: 'Wartortle', type: [PokeTypeEnum.Water] },
      { id: 9, name: 'Blastoise', type: [PokeTypeEnum.Water] },
      { id: 10, name: 'Caterpie', type: [PokeTypeEnum.Bug] },
      { id: 11, name: 'Metapod', type: [PokeTypeEnum.Bug] },
      { id: 12, name: 'Butterfree', type: [PokeTypeEnum.Bug, PokeTypeEnum.Flying] },
      { id: 13, name: 'Weedle', type: [PokeTypeEnum.Bug, PokeTypeEnum.Poison] },
      { id: 14, name: 'Kakuna', type: [PokeTypeEnum.Bug, PokeTypeEnum.Poison] },
      { id: 15, name: 'Beedrill', type: [PokeTypeEnum.Bug, PokeTypeEnum.Poison] },
      { id: 16, name: 'Pidgey', type: [PokeTypeEnum.Normal, PokeTypeEnum.Flying] },
      { id: 17, name: 'Pidgeotto', type: [PokeTypeEnum.Normal, PokeTypeEnum.Flying] },
      { id: 18, name: 'Pidgeot', type: [PokeTypeEnum.Normal, PokeTypeEnum.Flying] },
      { id: 19, name: 'Rattata', type: [PokeTypeEnum.Normal] },
      { id: 20, name: 'Raticate', type: [PokeTypeEnum.Normal] },
      { id: 21, name: 'Spearow', type: [PokeTypeEnum.Normal, PokeTypeEnum.Flying] },
      { id: 22, name: 'Fearow', type: [PokeTypeEnum.Normal, PokeTypeEnum.Flying] },
      { id: 23, name: 'Ekans', type: [PokeTypeEnum.Poison] },
      { id: 24, name: 'Arbok', type: [PokeTypeEnum.Poison] },
      { id: 25, name: 'Pikachu', type: [PokeTypeEnum.Electric] },
      { id: 26, name: 'Raichu', type: [PokeTypeEnum.Electric] },
      { id: 27, name: 'Sandshrew', type: [PokeTypeEnum.Ground] },
      { id: 28, name: 'Sandslash', type: [PokeTypeEnum.Ground] }
    ];
    return { pokemons };
  }
}
