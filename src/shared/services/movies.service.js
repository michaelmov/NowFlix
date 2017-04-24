/**
 * Created by Michael Movsesov on 3/25/17.
 */
import angular from 'angular';

class MoviesService {
    constructor($http, $q, $log, $rootScope, MOVIE_DB_API) {
       'ngInject';

        this.$http = $http;
        this.$q = $q;
        this.$log = $log;
        this.apiKey = MOVIE_DB_API.API_KEY;
        this.endPoint = MOVIE_DB_API.API_ENDPOINT;
        this.posterEndpoint = MOVIE_DB_API.POSTER_ENDPOINT;
        this.$rootScope = $rootScope;
        this.movies = [];
    }

    getMovies(listName) {
        let deferred = this.$q.defer();

        this.$http.get(`${this.endPoint}/movie/${listName}?api_key=${this.apiKey}&language=en-US&page=1&region=US`)
            .then((response) => {
                this.movies = response.data.results;
                this.$log.log('Movies fetched!');
                deferred.resolve(this.movies);
            }, (reason) => {
                this.$log.error('Error fetching movies');
                deferred.reject(reason);
            });

        return deferred.promise;
    }

    getImageUrl(path, size) {
        let imagePath = path;
        let imageSize = size || 'original';

        return `${this.posterEndpoint}/${imageSize}/${imagePath}`;
    }

    getMovieDetails(movieId) {
        let deferred = this.$q.defer();

        this.$http.get(`${this.endPoint}/movie/${movieId}?api_key=${this.apiKey}&language=en-US&page=1`)
            .then((response) => {
                let movieDetails = response.data;

                this.$log.info('Movie details fetched!');
                deferred.resolve(movieDetails);
            }, (reason) => {
                this.$log.error('Error fetching movie details :(');
                deferred.reject(reason);
            });

        return deferred.promise;
    }

    getMovieCredits(movieId, type) {
        let creditsType = type || 'cast';
        let deferred = this.$q.defer();

        this.$http.get(`${this.endPoint}/movie/${movieId}/credits?api_key=${this.apiKey}`)
            .then((response) => {
                let movieCredits = creditsType === 'crew' ? response.data.crew : response.data.cast;

                this.$log.info('Movie credits fetched!');
                deferred.resolve(movieCredits);
            }, (reason) => {
                this.$log.error('Error fetching movie credits :(');
                deferred.reject(reason);
            });

        return deferred.promise;
    }

    getMovieGenres(genreIds) {
        let movieGenres = [];
        let deferred = this.$q.defer();

        this.$http.get(`${this.endPoint}/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
            .then((response) => {
                // Check if any of the provided genreIds match the ids of genres from the api call.
                angular.forEach(genreIds, (genreId) => {
                    angular.forEach(response.data.genres, (genre) => {
                        // If we have a match, then add the genre name to movieGenres array.
                        if(genreId === genre.id) {
                            movieGenres.push(genre.name);
                        }
                    })
                });
                deferred.resolve(movieGenres);

            }, (reason) => {
                this.$log.error('Error fetching movie genres :(');
                deferred.reject(reason);
            });

        return deferred.promise;
    }

    // Get YouTube video key
    getVideo(movieId) {
        let deferred = this.$q.defer();

        this.$http.get(`${this.endPoint}/movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US&page=1`)
            .then((response) => {
                let videos = response.data.results;
                let videoKey = null;
                angular.forEach(videos, (video) => {
                    if(video.type === 'Trailer' && video.site === 'YouTube') {
                        videoKey = video.key;
                        deferred.resolve(videoKey);
                    }
                });
                deferred.resolve(videoKey)

            }, (reason) => {
                this.$log.error('Error getting video Url');
                deferred.reject(reason);
            });

        return deferred.promise;
    }
}
export default angular.module('app.services', [])
    .service('MoviesSvc', MoviesService)
    .name;
