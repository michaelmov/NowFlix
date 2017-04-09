export default class MovieDetailsController {
    constructor($scope, $stateParams, MOVIE_DB_API, MoviesSvc) {
        'ngInject';

        this.stateParams = $stateParams;
        this.moviesSvc = MoviesSvc;
        this.movieId = this.stateParams.movieId;

        this.movieDetails = {
            title: null,
            year: null,
            posterImage: null,
            genres: [],
            releaseDate: null,
            backdropImage: null
        };

        this.loadMovieDetails();

    }

    loadMovieDetails() {
        this.moviesSvc.getMovieDetails(this.movieId)
            .then((movie) => {
                this.movieDetails.title = movie.title;
                this.movieDetails.posterImage = this.moviesSvc.getImageUrl(movie.poster_path, 'w640');
                this.movieDetails.backdropImage = this.moviesSvc.getImageUrl(movie.backdrop_path);

                let tempReleaseDate = new Date(movie.release_date);

                this.movieDetails.year = tempReleaseDate.getFullYear();

            });
    }
}
