import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pokemon } from '../entities/pokemon';

@Injectable()
export class PokemonSearchService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(`app/pokemons/?name=${term}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}
