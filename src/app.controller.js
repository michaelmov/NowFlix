import angular from 'angular';

export default class AppController {
    constructor($location, $timeout) {
        'ngInject';

        this.$location = $location;
        this.$timeout =  $timeout;
        this.navItems = [
            {
                name: 'Now Playing',
                url: '/',
                active: false,
                pageTitle: 'Now Playing'
            },
            {
                name: 'Upcoming',
                url: '/upcoming',
                active: false,
                pageTitle: 'Upcoming Movies'
            },
            {
                name: 'Top Rated',
                url: '/top',
                active: false,
                pageTitle: 'Top Rated Movies'
            }
        ];

        this.currentPageTitle = null;
    }

    getCurrentPageTitle() {
        angular.forEach(this.navItems, (item) => {
            this.$timeout(() => {
                // Set active state to true if url in "navItems" object matches the browser's url path.
                angular.forEach(this.navItems, (item) => {
                    if (item.url === this.$location.path()) {
                        this.currentPageTitle = item.pageTitle;
                    }
                });
            }, 0);
        })
    }

}

