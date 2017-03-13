/**
 * Created by michaelmovsesov on 3/12/17.
 */

import angular from 'angular';
import sidebar from './sidebar.component';
import SidebarCtrl from './sidebar.controller';
import './_sidebar.scss';

export default angular.module('app.sidebar', [])
    .controller('SidebarCtrl', SidebarCtrl)
    .component('sidebar', sidebar)
    .name;

