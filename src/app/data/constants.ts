import {Injectable} from '@angular/core';
import { PokeTypeEnum } from './enums';


@Injectable()
export class Constants {

  static readonly PokemonTypes: any[] = [
    {id: PokeTypeEnum.Normal, code: 'Normal', color: 'A3ACAF'},
    {id: PokeTypeEnum.Fire, code: 'Fire', color: 'FD7D25'},
    {id: PokeTypeEnum.Water, code: 'Water', color: '4593C4'},
    {id: PokeTypeEnum.Grass, code: 'Grass', color: '9BCB50'},
    {id: PokeTypeEnum.Flying, code: 'Flying', color: '3DC7EE'},
    {id: PokeTypeEnum.Fighting, code: 'Fighting', color: 'D46823'},
    {id: PokeTypeEnum.Poison, code: 'Poison', color: 'BA7FC9'},
    {id: PokeTypeEnum.Electric, code: 'Electric', color: 'EDD535'},
    {id: PokeTypeEnum.Ground, code: 'Ground', color: 'AB9843'},
    {id: PokeTypeEnum.Rock, code: 'Rock', color: 'A28C20'},
    {id: PokeTypeEnum.Psychic, code: 'Psychic', color: 'F366B9'},
    {id: PokeTypeEnum.Ice, code: 'Ice', color: '53C4E7'},
    {id: PokeTypeEnum.Bug, code: 'Bug', color: '729F3E'},
    {id: PokeTypeEnum.Ghost, code: 'Ghost', color: '7B62A3'},
    {id: PokeTypeEnum.Steel, code: 'Steel', color: '9EB8B8'},
    {id: PokeTypeEnum.Dragon, code: 'Dragon', color: 'FDBAEA'},
    {id: PokeTypeEnum.Dark, code: 'Dark', color: '707070'},
    {id: PokeTypeEnum.Fairy, code: 'Fairy', color: 'FDBAE9'}
  ];

}
