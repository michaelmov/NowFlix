/**
 * Created by Michael Movsesov on 3/9/17.
 */

export default class SidebarController {
    constructor($location) {
        'ngInject';

        this.$location = $location;
        this.navItems = [
            {
                name: 'Now Playing',
                url: '/'
            },
            {
                name: 'Upcoming',
                url: '/upcoming'
            },
            {
                name: 'Top Rated',
                url: '/top'
            }
        ];

    }

    isNavItemActive(path) {
            return (this.$location.path() == path) ? true : false;
    }
}

