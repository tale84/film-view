import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesListComponent } from './movies-list.component';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { Movie } from '../../core/models/movie';
import { MatIconModule } from '@angular/material/icon';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let router: Router;
  
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [MoviesListComponent, MatTableModule, MatIconModule],
      providers: [{ provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesListComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign dataSource of MatTable', () => {
    // Arrange
    const testData : Movie[] = [{ 	
      adult:false,
      backdropPath:"/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg",
      genreIds:[35,10767],
      id:59941,
      originCountry:['US'],
      originalLanguage:'en',
      originalName:"Test Name",
      overview:"After Jay Leno's second retirement from the program, Jimmy Fallon stepped in as his permanent replacement. After 42 years in Los Angeles the program was brought back to New York.",
      popularity:4844.717,
      posterPath:"/g4amxJvtpnY79J77xeamnAEUO8r.jpg",
      firstAirDate:"2014-02-17",
      name:"Test Name",
      voteAverage:5.957,
      voteCount:258 
    } as Movie];

    // Act
    component.movies = testData;
    fixture.detectChanges();

    // Assert
    const name = fixture.nativeElement.querySelector('td#elementName');
    expect(name.textContent.trim()).toEqual("Test Name");

    const language = fixture.nativeElement.querySelector('td#elementLanguage');
    expect(language.textContent.trim()).toEqual("en");

    const popularity = fixture.nativeElement.querySelector('td#elementPopularity');
    expect(popularity.textContent.trim()).toEqual("4844.717");
  });

  it('should navigate to details with parameter id', () => {
    // Arrange
    const expectedId = 123;

    // Act
    component.navigateToDetails(expectedId);

    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/detail', {id: expectedId}]);
  });
});
