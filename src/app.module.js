/**
 * Created by Michael Movsesov on 1/21/17.
 */


// Framework dependencies
import angular from 'angular';
import 'angular-material';
import uirouter from 'angular-ui-router';

// Config
import { routing, theme } from './app.config';

// Constants
import MOVIE_DB_API from './shared/constants/movie-db.constant'

// Styles
import './_app.scss';

// Component modules
import Sidebar from './components/sidebar/sidebar.module';
import GridThumbnail from './components/grid-thumbnail/grid-thumbnail.module';
import CastProfileThumbnail from './components/cast-profile-thumbnail/cast-profile-thumbnail.module';

// View modules
import Movies from './views/movies/movies.module';
import MovieDetails from './views/movie-details/movie-details.module';

// Services
import MoviesSvc from './shared/services/movies.service';

// Controllers
import AppController from './app.controller';



angular.module('app', [
    'ngMaterial',
    'ngAnimate',
    uirouter,
    Movies,
    MovieDetails,
    Sidebar,
    GridThumbnail,
    CastProfileThumbnail,
    MoviesSvc
])
    .run(function($rootScope) {
        'ngInject';
        
        $rootScope.isLoading = false;
    })
    .constant('MOVIE_DB_API', MOVIE_DB_API)
    .controller('AppCtrl', AppController)
    .config(routing)
    .config(theme);