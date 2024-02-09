export class Movie {
    adult: boolean;
    backdropPath: string;
    genreIds: number[];
    id: number;
    originCountry: string[];
    originalLanguage: string;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath: string;
    firstAirDate: string;
    name: string;
    voteAverage: number;
    voteCount: number;

    constructor(movieObject: any) {
      this.adult = movieObject.adult;
      this.backdropPath = movieObject.backdrop_path;
      this.genreIds = movieObject.genre_ids;
      this.id = movieObject.id;
      this.originCountry = movieObject.origin_country;
      this.originalLanguage = movieObject.original_language;
      this.originalName = movieObject.original_name ? movieObject.original_name : movieObject.original_title;
      this.overview = movieObject.overview;
      this.popularity = movieObject.popularity;
      this.posterPath = movieObject.poster_path;
      this.firstAirDate = movieObject.first_air_date ? movieObject.first_air_date : movieObject.release_date;
      this.name = movieObject.name ? movieObject.name : movieObject.title;
      this.voteAverage = movieObject.vote_average;
      this.voteCount = movieObject.vote_count;
  }
  }