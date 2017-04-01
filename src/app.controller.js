
export default class AppController {
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
}

