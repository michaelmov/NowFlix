export default class MovieDetailsController {
    constructor($scope, $stateParams, MOVIE_DB_API, MoviesSvc) {
        'ngInject';

        this.stateParams = $stateParams;
        this.moviesSvc = MoviesSvc;
        this.movieId = this.stateParams.movieId;

        this.movieDetails = {
            title: null,
            genres: [],
            releaseDate: null,
            backgroundImage: null
        };

        this.loadMovieDetails();

    }

    loadMovieDetails() {
        this.moviesSvc.getMovieDetails(this.movieId)
            .then((movie) => {
                this.movieDetails.title = movie.title;
                this.movieDetails.backgroundImage = this.moviesSvc.getImageUrl(movie.backdrop_path, 'w1280');
            });
    }
}
