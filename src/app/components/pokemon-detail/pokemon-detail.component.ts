import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Constants } from 'app/data/constants';
import { PokeTypeEnum } from 'app/data/enums';
import { Pokemon } from '../../entities/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  public opened = false;

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
    this.opened = false;
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

  getPokemonType(typeId: PokeTypeEnum){
    return Constants.PokemonTypes[Constants.PokemonTypes.findIndex(x => x.id === typeId)].code;
  }

  public closeModal() {
    this.opened = false;
  }

  public openModal() {
    this.opened = true;
  }
}
