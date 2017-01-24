/**
 * Created by michaelmovsesov on 1/22/17.
 */

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes.js';
import HomeController from './home.controller.js';

export default angular.module('app.home', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;