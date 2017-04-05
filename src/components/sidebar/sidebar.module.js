/**
 * Created by michaelmovsesov on 3/12/17.
 */

import angular from 'angular';
import sidebar from './sidebar.component';

export default angular.module('app.sidebar', [])
    .component('sidebar', sidebar)
    .name;

