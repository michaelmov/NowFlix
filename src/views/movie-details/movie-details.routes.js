export default function routes($stateProvider) {
    'ngInject';

    $stateProvider
        .state('movieDetails', {
            url: '/movie/:movieId',
            template: require('./movie-details.template.html'),
            controller: 'MovieDetailsCtrl',
            controllerAs: 'movieDetails'
        });
}