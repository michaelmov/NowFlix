/**
 * Created by Michael Movsesov on 3/9/17.
 */

export default class SidebarController {
    constructor($location) {
        'ngInject';

        this.$location = $location;
    }

    isNavItemActive(path) {
            return (this.$location.path() == path) ? true : false;
    }
}

