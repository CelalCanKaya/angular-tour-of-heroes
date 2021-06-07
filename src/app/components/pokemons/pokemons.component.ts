import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../entities/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'my-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon;
  addingPokemon = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  getPokemons(): void {
    this.pokemonService
      .getPokemons()
      .subscribe(
        pokemons => (this.pokemons = pokemons),
        error => (this.error = error)
      )
  }

  addPokemon(): void {
    this.addingPokemon = true;
    this.selectedPokemon = null;
  }

  close(savedPokemon: Pokemon): void {
    this.addingPokemon = false;
    if (savedPokemon) {
      this.getPokemons();
    }
  }

  deletePokemon(pokemon: Pokemon, event: any): void {
    event.stopPropagation();
    this.pokemonService.delete(pokemon).subscribe(res => {
      this.pokemons = this.pokemons.filter(h => h !== pokemon);
      if (this.selectedPokemon === pokemon) {
        this.selectedPokemon = null;
      }
    }, error => (this.error = error));
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    this.addingPokemon = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPokemon.id]);
  }
}
