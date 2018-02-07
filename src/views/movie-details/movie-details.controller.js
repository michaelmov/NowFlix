import trailerModalCtrl from './trailer-modal/trailer-modal.controller';
import noPosterImage from '../../shared/assets/poster-unavailable.png';
import noProfileImage from '../../shared/assets/profile-unavailable.png';

export default class MovieDetailsController {
    constructor($filter, $mdDialog, $rootScope, $sce, $stateParams, MoviesSvc) {
        'ngInject';

        this.$filter = $filter;
        this.$sce = $sce;
        this.$stateParams = $stateParams;
        this.moviesSvc = MoviesSvc;
        this.movieId = this.$stateParams.movieId;
        this.$mdDialog = $mdDialog;
        this.$rootScope = $rootScope;

        this.movieDetails = {
            title: null,
            year: null,
            posterImage: null,
            genres: null,
            releaseDate: null,
            backdropImage: null,
            trailerUrl: null,
            rating: null,
            runtime: null,
            overview: null,
            cast: null,
            crew: null
        };
        this.loadMovieDetails();
    }

    loadMovieDetails() {
        this.$rootScope.isLoading = true;
        this.moviesSvc.getMovieDetails(this.movieId)
            .then((movie) => {
                this.movieDetails.title = movie.title;
                this.movieDetails.posterImage = this.getPosterImage(movie.poster_path);
                this.movieDetails.backdropImage = this.moviesSvc.getImageUrl(movie.backdrop_path);
                this.movieDetails.releaseDate = movie.release_date;
                this.movieDetails.year = this.$filter('date')(movie.release_date, 'yyyy');
                this.movieDetails.genres = movie.genres;
                this.movieDetails.rating = movie.vote_average;
                this.movieDetails.runtime = this.calculateRuntime(movie.runtime);
                this.movieDetails.overview = movie.overview;

                // Get trailer key and put together a YouTube embed url.
                this.moviesSvc.getVideo(this.movieId)
                    .then((movieKey) => {
                        if(movieKey) {
                            this.movieDetails.trailerUrl =
                                this.$sce.trustAsResourceUrl(`https://www.youtube.com/embed/${movieKey}?autoplay=1`);
                        }
                    });

                // Get movie cast
                this.moviesSvc.getMovieCredits(this.movieId, 'cast')
                    .then((movieCredits) => {
                        this.movieDetails.cast = movieCredits.slice(0, 12);
                    });

            }).finally(() => {
                this.$rootScope.isLoading = false;

        });
    }

    openTrailer(event) {
        this.$mdDialog.show({
            template: require('./trailer-modal/trailer-modal.template.html'),
            clickOutsideToClose: true,
            targetEvent: event,
            locals: {
                trailerUrl: this.movieDetails.trailerUrl,
                modalTitle: `${this.movieDetails.title} (${this.movieDetails.year}) - Trailer`
            },
            controller: trailerModalCtrl,
            controllerAs: 'ctrl'
        })
    }

    getPosterImage(path) {
        if(path) {
            return this.moviesSvc.getImageUrl(path, 'w1280');
        }
        return noPosterImage;
    }

    getProfileImage(path) {
        if(path) {
            return this.moviesSvc.getImageUrl(path, 'w185');
        }
        return noProfileImage;
    }

    // TODO: Make this function a filter
    calculateRuntime(runtime) {
        let numhours = Math.trunc(runtime/60);
        let numminutes = Math.trunc(runtime % 60);

        return `${numhours}h ${numminutes}m`;
    }
}
