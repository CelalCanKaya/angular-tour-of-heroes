import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../data/constants';
import { Pokemon } from '../../entities/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  topPokemons: Pokemon[] = [];
  donutChartData: any[] = [];
  topPokemonIds: number[] = [1, 4, 7, 12, 16, 20, 25, 27]

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
        this.topPokemons = pokemons.filter(x => this.topPokemonIds.includes(x.id));
        this.prepareDataForDonutChart();
      }
      );
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
