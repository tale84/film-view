import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home',  pathMatch: 'prefix', component: HomeComponent },
    { path: 'detail', component: MovieDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
