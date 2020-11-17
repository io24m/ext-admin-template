Ext.define('App.common.layoutwin.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'App.common.layoutwin.Header',
        'App.common.layoutwin.Menu',
        'App.common.layoutwin.MainController',
        'App.common.layoutwin.MainModel'
    ],
    plugins: 'viewport',
    xtype: 'common_layoutwin_main',
    controller: 'common_layoutwin_main',
    viewModel: {
        type: 'common_layoutwin_main'
    },
    layout: {
        type: 'border',
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },
    listeners: {
        // afterRender: 'mainRender',
        // resize: 'mainResize'
    },
    items: [{
        xtype: 'common_layoutwin_header',
        region: 'north',
        split: false
    }, {
        xtype: 'common_layoutwin_menu',
        region: 'west',
        split: false
    }, {
        // html: 'center',
        region: "center",
        // padding: '0 8 8',
        xtype: 'container',
        flex: 1,
        reference: 'mainCardPanel',
        itemId: 'contentPanel',
        // padding: '10 0 0 10',
        layout: {
            type: 'card',
            anchor: '100%'
        }
        // }, {
        //     html: 'south',
        //     region: 'south',
        //     //border: 1
    }]
});