export default class SidebarCtrl {

    constructor() {
        this._navItems = [
            {
                name: 'All',
                url: '/'
            },
            {
                name: 'Upcoming',
                url: '/upcoming'
            }
        ];

    }

    get navItems() {
        return this._navItems;
    }

}