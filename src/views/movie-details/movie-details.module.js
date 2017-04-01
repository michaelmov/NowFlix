import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './movie-details.routes';
import MovieDetailsController from './movie-details.controller';

export default angular.module('app.movieDetails', [uirouter])
    .config(routes)
    .controller('MovieDetailsCtrl', MovieDetailsController)
    .name;