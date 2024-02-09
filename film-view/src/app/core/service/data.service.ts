import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";

@Injectable({
    providedIn: 'root'
  })
export class DataService {
    private searchResults : Movie[] = [];

    setMovies(movies : Movie[]) : void {
        this.searchResults = movies;
    }

    getMovies() : Movie[] {
        return this.searchResults;
    }

    findById(idMovie : number) : Movie {
        return this.searchResults.filter((movie) => movie.id === idMovie)[0];
    }
}