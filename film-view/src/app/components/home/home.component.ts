import { Component, OnDestroy } from '@angular/core';
import { MoviesFilterComponent } from '../movies-filter/movies-filter.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { Subscription } from 'rxjs';
import { Movie } from '../../core/models/movie';
import { MovieFilter } from '../../core/models/movie-filter';
import { DataService } from '../../core/service/data.service';
import { MovieService } from '../../core/service/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MoviesListComponent, MoviesFilterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  title: string = 'TheMovieDB';
  movies : Movie[] = [];
  subMovies: Subscription = new Subscription;

  constructor(private movieService : MovieService, private dataService : DataService) {}

  onSearch(filter : MovieFilter) : void {
    this.subMovies = this.movieService.getMovies(filter).subscribe((items) => {
      this.movies = items;
      this.dataService.setMovies(items);
  })};

  ngOnDestroy() {
    this.subMovies.unsubscribe();
 }
}
