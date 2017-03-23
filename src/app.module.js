/**
 * Created by Michael Movsesov on 1/21/17.
 */

import angular from 'angular';
import 'angular-material';
import uirouter from 'angular-ui-router';

import './_app.scss';

import { routing, theme } from './app.config';
import MOVIE_DB_API from './constants/movie-db.constant'
import Sidebar from './components/sidebar/sidebar.module';
import Movies from './views/movies/movies.module';


angular.module('app', [
    'ngMaterial',
    uirouter,
    Movies,
    Sidebar,
])
    .constant('MOVIE_DB_API', MOVIE_DB_API)
    .config(routing)
    .config(theme);