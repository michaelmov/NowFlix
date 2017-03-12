import SidebarCtrl from './sidebar.controller.js';

let Sidebar = {
    bindings: {
        items: '='
    },
    template: require('./sidebar.template.html'),
    controller: SidebarCtrl
};

export default Sidebar;