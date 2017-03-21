/**
 * Created by Michael Movsesov on 1/21/17.
 */

import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import ngMaterial from 'angular-material';
import uirouter from 'angular-ui-router';

import './_app.scss';

import { routing, theme } from './app.config';
import MOVIE_DB_API from './constants/movie-db.constant'
import Sidebar from './components/sidebar/sidebar.module';
import Movies from './views/movies/movies.module';


angular.module('app', [
    uirouter,
    Movies,
    Sidebar,
    ngMaterial
])
    .constant('MOVIE_DB_API', MOVIE_DB_API)
    .config(routing)
    .config(theme);