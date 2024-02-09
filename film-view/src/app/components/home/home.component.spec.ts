import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Movie } from '../../core/models/movie';
import { MoviesFilterComponent } from '../movies-filter/movies-filter.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MovieService } from '../../core/service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let movieServiceSpy: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MovieService', ['getMovies']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent, BrowserAnimationsModule, MoviesListComponent, MoviesFilterComponent],
      providers: [{ provide: MovieService, useValue: spy }, {
        provide: ActivatedRoute,
        useValue: {
          paramMap: of({ get: (key: string) => 'mockParamValue' })
        }
      }]
    })
    .compileComponents();
    
    movieServiceSpy = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    expect(component.title).toEqual('TheMovieDB');
  })

  it('should not display component when movies have less than 1', () => {
    // Arrange
    component.movies = [];
    
    // Act
    fixture.detectChanges();
    
    // Assert
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-movies-list')).toBeNull();
  });

  it('should display component when movies have more than 1', () => {
    // Arrange
    component.movies = [{ 	
	  adult:false,
		backdropPath:"/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg",
		genreIds:[35,10767],
		id:59941,
		originCountry:['US'],
		originalLanguage:'en',
		originalName:"The Tonight Show Starring Jimmy Fallon",
		overview:"After Jay Leno's second retirement from the program, Jimmy Fallon stepped in as his permanent replacement. After 42 years in Los Angeles the program was brought back to New York.",
		popularity:4844.717,
		posterPath:"/g4amxJvtpnY79J77xeamnAEUO8r.jpg",
		firstAirDate:"2014-02-17",
		name:"The Tonight Show Starring Jimmy Fallon",
		voteAverage:5.957,
		voteCount:258 
	} as Movie];
    
    // Act
    fixture.detectChanges();
    
    // Assert
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-movies-list')).not.toBeNull();
  });

  it('should handle child event', () => {
    // Arrange
    const childComponent = fixture.debugElement.nativeElement.querySelector('app-movies-filter');

    // Act
    childComponent.querySelector('button').click();

    // Assert
    expect(movieServiceSpy.getMovies).toHaveBeenCalled();
  });
});
