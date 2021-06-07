import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { Pokemon } from '../../entities/pokemon';
import { PokemonSearchService } from '../../services/pokemon-search.service';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
  providers: [PokemonSearchService]
})
export class PokemonSearchComponent implements OnInit {
  pokemons: Observable<Pokemon[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private pokemonSearchService: PokemonSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokemons = this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(
        term =>
          term // switch to new observable each time
            ? // return the http search observable
              this.pokemonSearchService.search(term)
            : // or the observable of empty pokemons if no search term
              of<Pokemon[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<Pokemon[]>([]);
      })
    );
  }

  gotoDetail(pokemon: Pokemon): void {
    const link = ['/detail', pokemon.id];
    this.router.navigate(link);
  }
}
