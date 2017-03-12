/**
 * Created by Michael Movsesov on 1/21/17.
 */

import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import ngMaterial from 'angular-material';
import uirouter from 'angular-ui-router';

import { routing, theme } from './app.config';
import home from './views/MovieList';
import components from './core/components';

import 'angular-material/angular-material.scss';
import './_app.scss';

angular.module('app', [
    uirouter,
    home,
    components,
    ngMaterial
])
    .config(routing)
    .config(theme);