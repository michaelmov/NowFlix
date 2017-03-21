import SidebarCtrl from './sidebar.controller.js';

let sidebar = {
    bindings: {
        items: '='
    },
    template: require('./sidebar.template.html'),
    controller: SidebarCtrl
};

export default sidebar;