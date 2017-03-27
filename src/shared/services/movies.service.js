/**
 * Created by Michael Movsesov on 3/25/17.
 */
import angular from 'angular';

class MoviesService {
    constructor($http, $q, MOVIE_DB_API) {
       'ngInject';

        this.$http = $http;
        this.$q = $q;
        this.apiKey = MOVIE_DB_API.API_KEY;
        this.endPoint = MOVIE_DB_API.API_ENDPOINT;
    }

    getMovies() {
        let deferred = this.$q.defer();

        this.$http.get(`${this.endPoint}/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
            .then((response) => {
                deferred.resolve(response);
            }, (reason) => {
                deferred.reject(reason);
            });

        return deferred.promise;
    }
}
export default angular.module('app.services', [])
    .service('MoviesSvc', MoviesService)
    .name;