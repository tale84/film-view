import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { Movie } from '../models/movie';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
  });

  it('should set and get value to/from object', () => {
    // Arrange
    const testData: Movie[] = [{ 	
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
    service.setMovies(testData);
    const retrievedData = service.getMovies();

    // Assert
    expect(retrievedData).toEqual(testData);
  });

  it('should find by id', () => {
    // Arrange
    const movie1: Movie = { 	
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

  const movie2: Movie = { 	
    adult:false,
    backdropPath:"/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg",
    genreIds:[35,10767],
    id:666,
    originCountry:['FR'],
    originalLanguage:'fr',
    originalName:"Test",
    overview:"overview",
    popularity:4844.717,
    posterPath:"/g4amxJvtpnY79J77xeamnAEUO8r.jpg",
    firstAirDate:"2014-02-17",
    name:"Test",
    voteAverage:5.957,
    voteCount:258 
  } as Movie;

    const testData: Movie[] = [movie1,movie2];

    // Act
    service.setMovies(testData);
    const retrievedData = service.findById(Number("666"));

    // Assert
    expect(retrievedData).toEqual(movie2);
  });
});