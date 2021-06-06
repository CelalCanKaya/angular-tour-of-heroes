import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Pokemon } from '../entities/pokemon';

@Injectable()
export class PokemonService {
  private pokemonsUrl = 'app/pokemons'; // URL to web api

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http
      .get<Pokemon[]>(this.pokemonsUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.getPokemons().pipe(
      map(pokemons => pokemons.find(pokemon => pokemon.id === id))
    );
  }

  save(pokemon: Pokemon) {
    if (pokemon.id) {
      return this.put(pokemon);
    }
    return this.post(pokemon);
  }

  delete(pokemon: Pokemon) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.pokemonsUrl}/${pokemon.id}`;

    return this.http.delete<Pokemon>(url).pipe(catchError(this.handleError));
  }

  // Add new Pokemon
  private post(pokemon: Pokemon) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Pokemon>(this.pokemonsUrl, pokemon)
      .pipe(catchError(this.handleError));
  }

  // Update existing Pokemon
  private put(pokemon: Pokemon) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.pokemonsUrl}/${pokemon.id}`;

    return this.http.put<Pokemon>(url, pokemon).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
