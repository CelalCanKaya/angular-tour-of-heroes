import {Injectable} from '@angular/core';
import { PokeTypeEnum } from './enums';


@Injectable()
export class Constants {

  static readonly PokemonTypes: any[] = [
    {id: PokeTypeEnum.Normal, code: 'Normal'},
    {id: PokeTypeEnum.Fire, code: 'Fire'},
    {id: PokeTypeEnum.Water, code: 'Water'},
    {id: PokeTypeEnum.Grass, code: 'Grass'},
    {id: PokeTypeEnum.Flying, code: 'Flying'},
    {id: PokeTypeEnum.Fighting, code: 'Fighting'},
    {id: PokeTypeEnum.Poison, code: 'Poison'},
    {id: PokeTypeEnum.Electric, code: 'Electric'},
    {id: PokeTypeEnum.Ground, code: 'Ground'},
    {id: PokeTypeEnum.Rock, code: 'Rock'},
    {id: PokeTypeEnum.Psychic, code: 'Psychic'},
    {id: PokeTypeEnum.Ice, code: 'Ice'},
    {id: PokeTypeEnum.Bug, code: 'Bug'},
    {id: PokeTypeEnum.Ghost, code: 'Ghost'},
    {id: PokeTypeEnum.Steel, code: 'Steel'},
    {id: PokeTypeEnum.Dragon, code: 'Dragon'},
    {id: PokeTypeEnum.Dark, code: 'Dark'},
    {id: PokeTypeEnum.Fairy, code: 'Fairy'}
  ];

}
