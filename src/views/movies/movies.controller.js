/**
 * Created by Michael Movsesov on 1/22/17.
 */
export default class MoviesController {
    constructor($rootScope, $state, MoviesSvc) {
        'ngInject';

        this.state = $state;
        this.moviesSvc = MoviesSvc;
        this.movieList = null;
        this.$rootScope = $rootScope;

        this.loadMovieList();
    }

    loadMovieList() {
        this.$rootScope.isLoading = true;
        switch(this.state.current.name) {
            case 'upcomingMovies':
                this.moviesSvc.getMovies('upcoming')
                    .then((movies) => {
                        this.movieList = movies;
                        this.$rootScope.isLoading = false;
                });
                break;
            case 'topRatedMovies':
                this.moviesSvc.getMovies('top_rated')
                    .then((movies) => {
                        this.movieList = movies;
                        this.$rootScope.isLoading = false;

                });
                break;
            default:
                this.moviesSvc.getMovies('now_playing')
                    .then((movies) => {
                        this.movieList = movies;
                        this.$rootScope.isLoading = false;
                });
        }
    }

    getPoster(path) {
        return this.moviesSvc.getImageUrl(path, 'w640');
    }
}
