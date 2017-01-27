import SidebarCtrl from './sidebar.controller';

let Sidebar = {
    bindings: {
        items: '='
    },
    template: require('./sidebar.template.html'),
    controller: SidebarCtrl
};

export default Sidebar;