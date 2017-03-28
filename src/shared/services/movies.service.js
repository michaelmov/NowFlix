/**
 * Created by Michael Movsesov on 3/25/17.
 */
import angular from 'angular';

class MoviesService {
    constructor($http, $q, $log, MOVIE_DB_API) {
       'ngInject';

        this.$http = $http;
        this.$q = $q;
        this.$log = $log;
        this.apiKey = MOVIE_DB_API.API_KEY;
        this.endPoint = MOVIE_DB_API.API_ENDPOINT;
        this.movies = [];
    }

    getMovies(listName) {
        let deferred = this.$q.defer();

        this.$http.get(`${this.endPoint}/${listName}?api_key=${this.apiKey}&language=en-US&page=1`)
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
}
export default angular.module('app.services', [])
    .service('MoviesSvc', MoviesService)
    .name;