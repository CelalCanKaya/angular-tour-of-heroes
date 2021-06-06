import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../data/constants';
import { PokeTypeEnum } from '../../data/enums';

import { Pokemon } from '../../entities/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  donutChartData: any[] = [];

  public data: any[] = [
    {
      kind: "Pokemon",
      share: 1,
    }
  ];

  constructor(
    private router: Router,
    private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
        this.prepareDataForDonutChart();
      }
      );
  }

  gotoDetail(pokemon: Pokemon): void {
    const link = ['/detail', pokemon.id];
    this.router.navigate(link);
  }

  labelContent(e: any): string {
    return `${e.category}: \n ${e.value}%`;
  }

  prepareDataForDonutChart(){
    this.donutChartData = [];

    Constants.PokemonTypes.forEach(element => {
      let data = {
        kind: element.code,
        share: this.pokemons.filter(x => x.type.includes(element.id)).length,
      }

      if(data.share !== 0){
        this.donutChartData.push(data);
      }
    });

    this.data = this.donutChartData;
  }


}
