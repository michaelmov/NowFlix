export default class MovieDetailsController {
    constructor($stateParams, MOVIE_DB_API, MoviesSvc) {
        'ngInject';

        this.stateParams = $stateParams;
        this.moviesSvc = MoviesSvc;
        this.movieId = this.stateParams.movieId;
        this.movie = null;
    }
}
