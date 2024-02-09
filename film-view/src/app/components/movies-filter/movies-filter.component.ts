import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MovieFilter } from '../../core/models/movie-filter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-movies-filter',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule],
  templateUrl: './movies-filter.component.html',
  styleUrl: './movies-filter.component.scss'
})

export class MoviesFilterComponent implements OnInit {
  moviesFilterForm!: FormGroup;

  @Output() submitFilter: EventEmitter<MovieFilter> = new EventEmitter();
  
  ngOnInit(): void {
    this.moviesFilterForm = new FormGroup({
      type: new FormControl('movie'),
      name: new FormControl(''),
    });
  }

  onSubmit(): void {
    this.submitFilter.emit({
      type : this.moviesFilterForm.controls['type'].value,
      name : this.moviesFilterForm.controls['name'].value,
    } as MovieFilter)
  }
}

