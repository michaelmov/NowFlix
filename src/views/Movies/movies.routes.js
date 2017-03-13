/**
 * Created by michaelmovsesov on 1/22/17.
 */

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('allMovies', {
            url: '/',
            template: require('./movies.template.html'),
            controller: 'MoviesController',
            controllerAs: 'movies'
        })
        .state('upcomingMovies', {
            url: '/upcoming',
            template: require('./movies.template.html'),
            controller: 'MoviesController',
            controllerAs: 'movies'
        });
}