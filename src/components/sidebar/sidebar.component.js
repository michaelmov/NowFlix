import SidebarCtrl from './sidebar.controller';

let Sidebar = {
    bindings: {
        navItems: '@'
    },
    template: require('./sidebar.template.html'),
    controller: SidebarCtrl
};

export default Sidebar;