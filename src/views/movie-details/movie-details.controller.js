export default class MovieDetailsController {
    constructor($scope, $stateParams, MOVIE_DB_API, MoviesSvc) {
        'ngInject';

        this.stateParams = $stateParams;
        this.moviesSvc = MoviesSvc;
        this.movieId = this.stateParams.movieId;

        // TODO: Need to decouple the movieDetails object model from the server model.
        this.movieDetails = null;

        this.loadMovieDetails();

    }

    loadMovieDetails() {
        this.moviesSvc.getMovieDetails(this.movieId)
            .then((movie) => {
                this.movieDetails = movie;
            });
    }
}
