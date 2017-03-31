/**
 * Created by Michael Movsesov on 1/22/17.
 */
import MoviesSvc from './../../shared/services/movies.service'

export default class MoviesController {

    constructor($state, MOVIE_DB_API, MoviesSvc) {
        'ngInject';

        this.state = $state;
        this.apiKey = MOVIE_DB_API.API_KEY;
        this.moviesSvc = MoviesSvc;
        this.movieList = null;

        this.loadMovieList();
    }

    loadMovieList() {
        switch(this.state.current.name) {
            case 'upcomingMovies':
                this.moviesSvc.getMovies('upcoming').then((movies) => {
                    this.movieList = movies;
                });
                break;
            case 'topRatedMovies':
                this.moviesSvc.getMovies('top_rated').then((movies) => {
                    this.movieList = movies;
                });
                break;
            default:
                this.moviesSvc.getMovies('now_playing').then((movies) => {
                    this.movieList = movies;
                    console.log(this.movieList);
                });
        }
    }

    getPoster(path) {
        return this.moviesSvc.getMoviePosterUrl('w320', path);
    }
}
