/**
 * Created by Michael Movsesov on 3/9/17.
 */

export default class SidebarController {
    constructor() {
        this.navItems = [
            {
                name: 'Now Playing',
                url: '/',
                active: true
            },
            {
                name: 'Upcoming',
                url: '/upcoming',
                active: false
            },
            {
                name: 'Top Rated',
                url: '/top',
                active: false
            }
        ]
    }
}