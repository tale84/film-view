import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../core/service/data.service';
import { of } from 'rxjs';
import { Movie } from '../../core/models/movie';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let activatedRoute: ActivatedRoute;
  let dataService: jasmine.SpyObj<DataService>;
  let router: Router;
  
  const movie : Movie = { 	
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
	} as Movie;

  beforeEach(async () => {
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['findById']);
    dataServiceSpy.findById.and.returnValue(of(movie));

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [MovieDetailsComponent, BrowserAnimationsModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: (param: string) => 'mockId' // Mock the snapshot paramMap to return a mockId
            }
          }
        }
      },
      {
        provide: DataService,
        useValue: dataServiceSpy
      },
      { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home', () => {
    // Arrange
    const expectedRoute = '/home';

    // Act
    component.returnToHome();

    // Assert
    expect(router.navigate).toHaveBeenCalledWith([expectedRoute]);
  });
});
