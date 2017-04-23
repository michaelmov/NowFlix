/**
 * Created by Michael Movsesov on 1/22/17.
 */
import angular from 'angular';
import noPosterImage from '../../shared/assets/poster-unavailable.png';

export default class MoviesController {
    constructor($rootScope, $state, MoviesSvc) {
        'ngInject';

        this.state = $state;
        this.moviesSvc = MoviesSvc;
        this.movieList = [];
        this.$rootScope = $rootScope;

        this.loadMovieList();
    }

    loadMovieList() {
        this.$rootScope.isLoading = true;
        switch(this.state.current.name) {
            case 'upcomingMovies':
                this.buildMovieList('upcoming');
                this.$rootScope.isLoading = false;
                break;
            case 'topRatedMovies':
                this.buildMovieList('top_rated');
                this.$rootScope.isLoading = false;
                break;
            default:
                this.buildMovieList('now_playing');
                this.$rootScope.isLoading = false;
        }
    }

    buildMovieList(listName) {
        this.moviesSvc.getMovies(listName)
            .then((movies) => {
                angular.forEach(movies, (movie) => {
                    let movieObject = {
                        id: movie.id,
                        title: movie.title,
                        rating: movie.vote_average,
                        poster: this.getPosterImage(movie.poster_path)
                    };

                    this.movieList.push(movieObject);
                })
        })
    }

    getPosterImage(path) {
        if(path) {
            return this.moviesSvc.getImageUrl(path, 'w640');
        }
        return noPosterImage;
    }
}
