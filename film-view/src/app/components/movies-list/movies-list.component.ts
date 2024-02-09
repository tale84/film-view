import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../core/models/movie';
import { MovieService } from '../../core/service/movie.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  @Input() movies: Movie[] = [];
  displayedColumns: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.displayedColumns = ['name', 'originalLanguage', 'popularity', 'actions'];
  }

  navigateToDetails(idMovie : number) : void {
    this.router.navigate(['/detail', { id: idMovie }]);
  }
}
