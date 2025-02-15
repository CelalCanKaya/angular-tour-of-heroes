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
      { id: 28, name: 'Sandslash', type: [PokeTypeEnum.Ground] },
      { id: 29, name: 'Nidoran', type: [PokeTypeEnum.Poison] },
      { id: 30, name: 'Nidorina', type: [PokeTypeEnum.Poison] },
      { id: 31, name: 'Nidoqueen', type: [PokeTypeEnum.Poison, PokeTypeEnum.Ground] },
      { id: 32, name: 'Nidoran', type: [PokeTypeEnum.Poison] },
      { id: 33, name: 'Nidorino', type: [PokeTypeEnum.Poison] },
      { id: 34, name: 'Nidoking', type: [PokeTypeEnum.Poison, PokeTypeEnum.Ground] },
      { id: 35, name: 'Clefairy', type: [PokeTypeEnum.Fairy] },
      { id: 36, name: 'Clefable', type: [PokeTypeEnum.Fairy] },
      { id: 37, name: 'Vulpix', type: [PokeTypeEnum.Fire] },
      { id: 38, name: 'Ninetales', type: [PokeTypeEnum.Fire] },
      { id: 39, name: 'Jigglypuff', type: [PokeTypeEnum.Normal, PokeTypeEnum.Fairy] },
      { id: 40, name: 'Wigglytuff', type: [PokeTypeEnum.Normal, PokeTypeEnum.Fairy] },
      { id: 46, name: 'Paras', type: [PokeTypeEnum.Bug, PokeTypeEnum.Grass] },
      { id: 56, name: 'Mankey', type: [PokeTypeEnum.Fighting] },
      { id: 57, name: 'Primeape', type: [PokeTypeEnum.Fighting] },
      { id: 63, name: 'Abra', type: [PokeTypeEnum.Psychic] },
      { id: 64, name: 'Kadabra', type: [PokeTypeEnum.Psychic] },
      { id: 65, name: 'Alakazam', type: [PokeTypeEnum.Psychic] },
      { id: 66, name: 'Machop', type: [PokeTypeEnum.Fighting] },
      { id: 67, name: 'Machoke', type: [PokeTypeEnum.Fighting] },
      { id: 68, name: 'Machamp', type: [PokeTypeEnum.Fighting] },
      { id: 72, name: 'Tentacool', type: [PokeTypeEnum.Water, PokeTypeEnum.Poison] },
      { id: 73, name: 'Tentacruel', type: [PokeTypeEnum.Water, PokeTypeEnum.Poison] },
      { id: 74, name: 'Geodude', type: [PokeTypeEnum.Rock, PokeTypeEnum.Ground] },
      { id: 75, name: 'Graveler', type: [PokeTypeEnum.Rock, PokeTypeEnum.Ground] },
      { id: 76, name: 'Golem', type: [PokeTypeEnum.Rock, PokeTypeEnum.Ground] },
      { id: 81, name: 'Magnemite', type: [PokeTypeEnum.Electric, PokeTypeEnum.Steel] },
      { id: 82, name: 'Magneton', type: [PokeTypeEnum.Electric, PokeTypeEnum.Steel] },
      { id: 90, name: 'Shellder', type: [PokeTypeEnum.Water] },
      { id: 91, name: 'Cloyster', type: [PokeTypeEnum.Water, PokeTypeEnum.Ice] },
      { id: 92, name: 'Gastly', type: [PokeTypeEnum.Ghost, PokeTypeEnum.Poison] },
      { id: 93, name: 'Haunter', type: [PokeTypeEnum.Ghost, PokeTypeEnum.Poison] },
      { id: 94, name: 'Gengar', type: [PokeTypeEnum.Ghost, PokeTypeEnum.Poison] },
      { id: 102, name: 'Exeggcute', type: [PokeTypeEnum.Grass, PokeTypeEnum.Psychic] },
      { id: 103, name: 'Exeggutor', type: [PokeTypeEnum.Grass, PokeTypeEnum.Psychic] },
      { id: 106, name: 'Hitmonlee', type: [PokeTypeEnum.Fighting] },
      { id: 107, name: 'Hitmonchan', type: [PokeTypeEnum.Fighting] },
      { id: 108, name: 'Lickitung', type: [PokeTypeEnum.Normal] },
      { id: 123, name: 'Scyther', type: [PokeTypeEnum.Bug, PokeTypeEnum.Flying] },
      { id: 124, name: 'Jynx', type: [PokeTypeEnum.Ice, PokeTypeEnum.Psychic] },
      { id: 126, name: 'Magmar', type: [PokeTypeEnum.Fire] },
      { id: 127, name: 'Pinsir', type: [PokeTypeEnum.Bug] },
      { id: 131, name: 'Lapras', type: [PokeTypeEnum.Water, PokeTypeEnum.Ice] },
      { id: 147, name: 'Dratini', type: [PokeTypeEnum.Dragon] },
      { id: 148, name: 'Dragonair', type: [PokeTypeEnum.Dragon] },
      { id: 149, name: 'Dragonite', type: [PokeTypeEnum.Dragon] },
      { id: 185, name: 'Sudowoodo', type: [PokeTypeEnum.Rock] },
      { id: 198, name: 'Murkrow', type: [PokeTypeEnum.Dark, PokeTypeEnum.Flying] },
      { id: 212, name: 'Scizor', type: [PokeTypeEnum.Bug, PokeTypeEnum.Steel] },
      { id: 222, name: 'Corsola', type: [PokeTypeEnum.Water, PokeTypeEnum.Rock] },
      { id: 228, name: 'Houndour', type: [PokeTypeEnum.Dark, PokeTypeEnum.Fire] },
      { id: 229, name: 'Houndoom', type: [PokeTypeEnum.Dark, PokeTypeEnum.Fire] },
      { id: 243, name: 'Raikou', type: [PokeTypeEnum.Electric] },
      { id: 250, name: 'Ho-oh', type: [PokeTypeEnum.Fire, PokeTypeEnum.Flying] },
      { id: 302, name: 'Sableye', type: [PokeTypeEnum.Dark, PokeTypeEnum.Ghost] },
      { id: 319, name: 'Sharpedo', type: [PokeTypeEnum.Water, PokeTypeEnum.Dark] }
    ];
    return { pokemons };
  }
}
