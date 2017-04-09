/**
 * Created by Michael Movsesov on 1/22/17.
 */
export default class MoviesController {
    constructor($state, MOVIE_DB_API, MoviesSvc) {
        'ngInject';

        this.state = $state;
        this.moviesSvc = MoviesSvc;
        this.movieList = null;

        this.loadMovieList();
    }

    loadMovieList() {
        switch(this.state.current.name) {
            case 'upcomingMovies':
                this.moviesSvc.getMovies('upcoming')
                    .then((movies) => {
                        this.movieList = movies;
                });
                break;
            case 'topRatedMovies':
                this.moviesSvc.getMovies('top_rated')
                    .then((movies) => {
                        this.movieList = movies;
                });
                break;
            default:
                this.moviesSvc.getMovies('now_playing')
                    .then((movies) => {
                        this.movieList = movies;
                });
        }
    }

    getPoster(path) {
        return this.moviesSvc.getImageUrl(path, 'w640');
    }
}
