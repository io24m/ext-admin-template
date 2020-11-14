Ext.define('Admin.common.layoutwin.Menu', {
    extend: 'Ext.container.Container',
    xtype: 'common_layoutwin_menu',
    requires: [
        'Admin.common.layout.MainTreeStore'
    ],
    scrollable: 'y',
    width: 250,
    padding: '0 0 0 0',
    margin: '0 0 0 0',
    style: {
        backgroundColor: '#32404e'
    },
    items: [{
        xtype: 'treelist',
        reference: 'navigationTreeList',
        itemId: 'navigationTreeList',
        ui: 'nav',
        store: {
            type: 'common_layout_main',
        },
        width: 250,
        expanderFirst: false,
        expanderOnly: false,
        listeners: {
            selectionchange: 'onNavigationTreeSelectionChange'
        }
    }]
});