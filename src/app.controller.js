import angular from 'angular';

export default class AppController {
    constructor($location, $state, $timeout) {
        'ngInject';

        this.$location = $location;
        this.$state = $state;
        this.$timeout =  $timeout;
        this.navItems = [
            {
                name: 'Now Playing',
                url: 'nowPlayingMovies',
                active: false,
                pageTitle: 'Now Playing'
            },
            {
                name: 'Upcoming',
                url: 'upcomingMovies',
                active: false,
                pageTitle: 'Upcoming Movies'
            },
            {
                name: 'Top Rated',
                url: 'topRatedMovies',
                active: false,
                pageTitle: 'Top Rated Movies'
            }
        ];

        this.currentPageTitle = null;

        this.setCurrentPageTitle();
        this.isNavItemActive();
    }

    setCurrentPageTitle() {
        this.$timeout(() => {
            angular.forEach(this.navItems, (item) => {
                if (item.url === this.$state.current.name) {
                    this.currentPageTitle = item.pageTitle;
                }
            });
        }, 0);
    }

    isNavItemActive() {
        this.$timeout(() => {
            // Set all active to false to remove active state.
            angular.forEach(this.navItems, (item) => {
                item.active = false;
            });

            // Set active state to true if url in "navItems" object matches the browser's url path.
            angular.forEach(this.navItems, (item) => {
                if (item.url === this.$state.current.name) {
                    item.active = true;
                }
            });
        }, 0);

    }

    onNavChange() {
        console.log('changed!');
        this.setCurrentPageTitle();
        this.isNavItemActive();
    }

}

