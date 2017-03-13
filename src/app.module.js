/**
 * Created by Michael Movsesov on 1/21/17.
 */

import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import ngMaterial from 'angular-material';
import uirouter from 'angular-ui-router';

import { routing, theme, MOVIE_DB_API } from './app.config';
import Movies from './views/movies';
import Sidebar from './layout/sidebar'

import 'angular-material/angular-material.scss';
import './_app.scss';

angular.module('app', [
    uirouter,
    Movies,
    Sidebar,
    ngMaterial
])
    .constant('MOVIE_DB_API', MOVIE_DB_API)
    .config(routing)
    .config(theme);