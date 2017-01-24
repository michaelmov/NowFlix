/**
 * Created by Michael Movsesov on 1/21/17.
 */

import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import  ngMaterial from 'angular-material';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './views/home';

import 'angular-material/angular-material.css';
import './_app.scss';

angular.module('app', [uirouter, home, ngMaterial])
    .config(routing);