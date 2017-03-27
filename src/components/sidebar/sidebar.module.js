/**
 * Created by michaelmovsesov on 3/12/17.
 */

import angular from 'angular';
import sidebar from './sidebar.component';
import SidebarController from './sidebar.controller';

export default angular.module('app.sidebar', [])
    .controller('SidebarCtrl', SidebarController)
    .component('sidebar', sidebar)
    .name;

