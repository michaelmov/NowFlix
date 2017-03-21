/**
 * Created by michaelmovsesov on 1/22/17.
 */

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './movies.routes.js';
import MoviesController from './movies.controller.js';

export default angular.module('app.movies', [uirouter])
    .config(routing)
    .controller('MoviesController', MoviesController)
    .name;