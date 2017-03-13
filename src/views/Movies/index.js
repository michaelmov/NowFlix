/**
 * Created by michaelmovsesov on 1/22/17.
 */

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './movies.routes.js';
import MoviesController from './movies.controller.js';
import './_movies.scss'

export default angular.module('app.views', [uirouter])
    .config(routing)
    .controller('MoviesController', MoviesController)
    .name;