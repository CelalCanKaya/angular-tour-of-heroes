import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'app/data/constants';
import { PokeTypeEnum } from 'app/data/enums';
import { Pokemon } from '../../entities/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'my-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  isChartLoaded: boolean = false;
  selectedPokemon: Pokemon;
  pokemonTypes: any[] = [];
  value = "";
  selectedType: any;
  error: any;
  public defaultItem: { id: number; code: string; color: string } = {
    id: -1, code: 'Select Type..', color: 'FFFFFF'
  };
  constructor(private router: Router, private pokemonService: PokemonService) {}

  getPokemons(): void {
    this.pokemonService
      .getPokemons()
      .subscribe(
        pokemons => {
          this.pokemons = pokemons;
          this.filteredPokemons = pokemons;
          this.isChartLoaded = true;
        },
        error => (this.error = error)
      )
  }

  ngOnInit(): void {
    this.getPokemons();
    this.pokemonTypes = Constants.PokemonTypes;
    this.selectedType = this.defaultItem;
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPokemon.id]);
  }

  onModelChanged(){
    this.filteredPokemons = this.pokemons.filter(x => x.name.toLowerCase().indexOf(this.value.toLowerCase()) >= 0);
    console.log(this.selectedType);
    if(this.selectedType.id !== -1){
      this.filteredPokemons = this.filteredPokemons.filter(x => x.type.includes(this.selectedType.id));
    }
  }
}
