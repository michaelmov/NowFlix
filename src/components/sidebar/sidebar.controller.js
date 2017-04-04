/**
 * Created by Michael Movsesov on 3/9/17.
 */

export default class SidebarController {
    constructor($location, $scope, $timeout) {
        'ngInject';

        this.$location = $location;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.navItems = this.$scope.$ctrl.items;
        this.getCurrentPageTitle = this.$scope.$ctrl.onNavChange;

        this.isNavItemActive();
    }

    isNavItemActive() {
        this.$timeout(() => {
            // Set all active to false to remove active state.
            angular.forEach(this.navItems, (item) => {
                item.active = false;
            });

            // Set active state to true if url in "navItems" object matches the browser's url path.
            angular.forEach(this.navItems, (item) => {
                if (item.url === this.$location.path()) {
                    item.active = true;
                }
            });
        }, 0);

        this.getCurrentPageTitle();
    }
}

