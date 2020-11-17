Ext.define('App.common.layoutwin.Menu', {
    extend: 'Ext.container.Container',
    xtype: 'common_layoutwin_menu',
    requires: [
        'App.common.layout.MainTreeStore'
    ],
    scrollable: false,
    width: 250,
    padding: '0 0 5 0',
    margin: '0 0 0 0',
    layout: {
        type: 'fit'
    },
    reference: 'navigationContainer',
    style: {
        backgroundColor: '#32404e',
        // backgroundColor: '#000000',
        overflow: 'hidden'
        // marginBottom: '-17px',
        // marginRight: '-17px'
    },
    items: [{
        xtype: 'container',
        reference: 'navigationTreeListContainer',
        name: 'navigationTreeListContainer',
        scrollable: 'y',
        width: 267,
        style: {
            // backgroundColor: '#ff0000',
            overflow: 'auto',
            // height: '100%',
            // marginBottom: '-17px',
            marginRight: '-17px'
        },
        items: [{
            xtype: 'treelist',
            reference: 'navigationTreeList',
            itemId: 'navigationTreeList',
            singleExpand: true,
            // singleExpand: true,
            // expanderOnly: false,
            // selected: true,
            // selectedParent: true,
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
        // }, {
        //     xtype: 'treelist',
        //     reference: 'navigationTreeList',
        //     itemId: 'navigationTreeList',
        //     ui: 'nav',
        //     store: {
        //         type: 'common_layout_main',
        //     },
        //     width: 250,
        //     expanderFirst: false,
        //     expanderOnly: false,
        //     listeners: {
        //         selectionchange: 'onNavigationTreeSelectionChange'
        //     }
    }],
    // beforeLayout: function () {
    //     // debugger
    //     var me = this,
    //         height = Ext.Element.getViewportHeight() - 44,
    //         navTree = me.down('[name=navigationTreeListContainer]'); // me.getComponent('navigationTreeListContainer');

    //     //me.minHeight = height;

    //     navTree.setStyle({
    //         'height': height + 'px'
    //     });

    //     me.callParent(arguments);
    // }
});