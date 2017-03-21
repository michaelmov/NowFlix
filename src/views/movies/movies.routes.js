/**
 * Created by michaelmovsesov on 1/22/17.
 */

export default function routes($stateProvider) {
    'ngInject';
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