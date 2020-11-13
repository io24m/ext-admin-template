Ext.define('Admin.common.layout.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree',
        'Admin.common.layout.MainTreeStore',
        // 'myApp.store.MainTreeStore'
    ],
    xtype: 'common_layout_main',
    controller: 'common_layout_main',
    viewModel: 'common_layout_main',
    plugins: 'viewport',
    cls: 'sencha-dash-viewport',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'toolbar',
        cls: 'sencha-dash-dash-headerbar shadow',
        height: 44,
        items: [{
                xtype: 'component',
                // paddind: '0',
                // margin: '0',
                // style: {
                //     backgroundColor: 'aqua',
                //     top: '0px'
                // },
                reference: 'senchaLogo',
                // html: 'Sencha',
                width: 250
            }, {
                margin: '0 0 0 8',
                iconCls: 'x-fa fa-bars',
                // hidden: true,
                handler: 'onToggleNavigationSize'
            }, '->', {
                //     xtype: 'segmentedbutton',
                //     margin: '0 16 0 0',
                //     platformConfig: {
                //         ie9m: {
                //             hidden: true
                //         }
                //     },

                //     items: [{
                //         iconCls: 'x-fa fa-desktop',
                //         pressed: true
                //     }, {
                //         iconCls: 'x-fa fa-tablet',
                //         handler: 'onSwitchToModern',
                //         tooltip: 'Switch to modern toolkit'
                //     }]
                // }, {
                iconCls: 'x-fa fa-search',
                href: '#searchresults',
                hrefTarget: '_self',
                tooltip: '检索'
            },
            {
                iconCls: 'x-fa fa-envelope',
                href: '#email',
                hrefTarget: '_self',
                tooltip: '检查邮件'
            },
            {
                iconCls: 'x-fa fa-question',
                href: '#faq',
                hrefTarget: '_self',
                tooltip: '问题'
            }, {
                iconCls: 'x-fa fa-th-large',
                href: '#profile',
                hrefTarget: '_self',
                tooltip: '个人中心'
            },{
                iconCls: 'x-fa fa-user',
                href: '#profile',
                hrefTarget: '_self',
                tooltip: '个人中心'
            },
            // {
            //     xtype: 'tbtext',
            //     text: '李先生',
            //     cls: 'top-user-name'
            // },
            {
                xtype: 'image',
                height: 35,
                width: 35,
                alt: '用户',
                cls: 'header-right-profile-image',
                src: 'resources/images/2.png'
            },{
                xtype: 'tbtext',
                text: '李先生',
                cls: 'top-user-name'
            },
        ]
    }, {
        xtype: 'common_layout_maincontainerwrap',
        reference: 'mainContainerWrap',
        flex: 1,
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
        }, {
            xtype: 'container',
            flex: 1,
            reference: 'mainCardPanel',
            itemId: 'contentPanel',
            // padding: '10 0 0 10',
            layout: {
                type: 'card',
                anchor: '100%'
            }
        }]
    }]
});