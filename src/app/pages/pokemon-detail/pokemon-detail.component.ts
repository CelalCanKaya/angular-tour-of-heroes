import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '../../entities/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.pokemonService.getPokemon(id).subscribe(pokemon => (this.pokemon = pokemon));
      } else {
        this.navigated = false;
        this.pokemon = new Pokemon();
      }
    });
  }

  save(): void {
    this.pokemonService.save(this.pokemon).subscribe(pokemon => {
      this.pokemon = pokemon; // saved pokemon, w/ id if new
      this.goBack(pokemon);
    }, error => (this.error = error)); // TODO: Display error message
  }

  goBack(savedPokemon: Pokemon = null): void {
    this.close.emit(savedPokemon);
    if (this.navigated) {
      window.history.back();
    }
  }
}
