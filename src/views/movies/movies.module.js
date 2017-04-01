/**
 * Created by michaelmovsesov on 1/22/17.
 */

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './movies.routes.js';
import MoviesController from './movies.controller.js';

export default angular.module('app.movies', [uirouter])
    .config(routes)
    .controller('MoviesCtrl', MoviesController)
    .name;