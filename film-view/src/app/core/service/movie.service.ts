import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Movie } from "../models/movie";
import { MovieFilter } from '../models/movie-filter';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _prefixUrl : string = 'https://api.themoviedb.org/3';

  private _token : string = '92b418e837b833be308bbfb1fb2aca1e';

  private _discover : string = '/discover';

  private _search : string = '/search';

  constructor(private _httpClient: HttpClient) {}

  getMovies(filter : MovieFilter) : Observable<Movie[]> {
    return this._httpClient.get<Movie[]>(this.buildUrl(filter), { params: this.buildParams(filter)})
    .pipe(map((res : any) => 
        res.results.map((item : any) => {
            return new Movie(item);
        })),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error('Something went wrong; please try again later.'));
        }));
  }

  private buildUrl(filter : MovieFilter) : string {
    let result = '';
    if (filter.name) {
      result = this._prefixUrl + this._search;
    } else {
      result = this._prefixUrl + this._discover;
    }
    return result + "/" + filter.type;
  }

  private buildParams(filter : MovieFilter) : HttpParams {
    return new HttpParams().set('api_key', this._token)
    .set('query', filter.name ? filter.name : '');
  }
}