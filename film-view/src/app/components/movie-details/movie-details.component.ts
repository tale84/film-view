import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../core/service/data.service';
import { MatCardModule } from '@angular/material/card';
import { Movie } from '../../core/models/movie';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, CommonModule, MatChipsModule, MatButtonModule,],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {
  imageUrl!: string;
  movie!: Movie;
  private _prefixImgUrl : string = 'https://image.tmdb.org/t/p/w500';

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const idMovie = this.route.snapshot.paramMap.get('id');
    if (idMovie) {
      this.movie = this.dataService.findById(+idMovie);
      this.imageUrl = this._prefixImgUrl + this.movie.posterPath;
    }
  }

  returnToHome() : void {
    this.router.navigate(['/home']);
  }
}
