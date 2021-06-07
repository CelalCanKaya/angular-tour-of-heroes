import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BadgeSize } from '@progress/kendo-angular-indicators';
import { Constants } from 'app/data/constants';
import { PokeTypeEnum } from 'app/data/enums';
import { Pokemon } from 'app/entities/pokemon';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  public badgeSize: BadgeSize = "large";

  constructor() { }

  ngOnInit(): void {
  }

  getBackgroundColor(typeId: PokeTypeEnum){
    return Constants.PokemonTypes[Constants.PokemonTypes.findIndex(x => x.id === typeId)].color;
  }

  getPokemonType(typeId: PokeTypeEnum){
    return Constants.PokemonTypes[Constants.PokemonTypes.findIndex(x => x.id === typeId)].code;
  }

}
