/**
 * Created by Michael Movsesov on 3/9/17.
 */

export default class SidebarController {
    constructor() {
        this.navItems = [
            {
                name: 'Now Playing',
                url: '/'
            },
            {
                name: 'Upcoming',
                url: '/upcoming'
            }
        ]
    }
}