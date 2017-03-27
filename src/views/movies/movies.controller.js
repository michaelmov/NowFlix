/**
 * Created by Michael Movsesov on 1/22/17.
 */
import MoviesSvc from './../../shared/services/movies.service'

export default class MoviesController {

    constructor($state, MOVIE_DB_API, MoviesSvc) {
        'ngInject';

        this.name = 'World';
        this.state = $state;
        this.apiKey = MOVIE_DB_API.API_KEY
        this.moviesSvc = MoviesSvc;
        this.movieList = null;
    }

    changeName() {
        if (this.state.is('upcomingMovies')) {
            this.name = 'Upcoming movies';
            return;
        }
        this.name = 'NowFlix ' + this.apiKey;
        this.moviesSvc.getMovies().then((movies) => {
            this.movieList = movies.data.results;
            console.log(this.movieList);
        })
        ;
    }
}
