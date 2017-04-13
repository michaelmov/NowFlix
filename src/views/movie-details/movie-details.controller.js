import trailerModalCtrl from './trailer-modal/trailer-modal.controller';

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
            genres: [],
            releaseDate: null,
            backdropImage: null,
            trailerUrl: null
        };
        this.loadMovieDetails();
    }

    loadMovieDetails() {
        this.$rootScope.isLoading = true;
        this.moviesSvc.getMovieDetails(this.movieId)
            .then((movie) => {
                this.movieDetails.title = movie.title;
                this.movieDetails.posterImage = this.moviesSvc.getImageUrl(movie.poster_path, 'w640');
                this.movieDetails.backdropImage = this.moviesSvc.getImageUrl(movie.backdrop_path);
                this.movieDetails.releaseDate = movie.release_date;
                this.movieDetails.year = this.$filter('date')(movie.release_date, 'yyyy');

                // Get trailer key and put together a YouTube embed url.
                this.moviesSvc.getVideo(this.movieId)
                    .then((movieKey) => {
                        if(movieKey) {
                            this.movieDetails.trailerUrl =
                                this.$sce.trustAsResourceUrl(`https://www.youtube.com/embed/${movieKey}?autoplay=1`);
                        }
                    })

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
}
