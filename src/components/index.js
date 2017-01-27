import angular from 'angular';

let componentsModule = angular.module('app.components', []);

/*
* Sidebar Component
* */
import Sidebar from './sidebar/sidebar.component';
import './sidebar/_sidebar.scss';
componentsModule.component('sidebar', Sidebar);


export default componentsModule.name;