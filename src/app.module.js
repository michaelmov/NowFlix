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

// View modules
import Movies from './views/movies/movies.module';

// Services
import MoviesSvc from './shared/services/movies.service';



angular.module('app', [
    'ngMaterial',
    uirouter,
    Movies,
    Sidebar,
    GridThumbnail,
    MoviesSvc
])
    .constant('MOVIE_DB_API', MOVIE_DB_API)
    .config(routing)
    .config(theme);