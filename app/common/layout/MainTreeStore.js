Ext.define('App.common.layout.MainTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.common_layout_main',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [{
                text: '控制台',
                iconCls: 'x-fa fa-desktop',
                viewType: 'home',
                routeId: 'home', // routeId defaults to viewType
                leaf: true
            }, {
                text: '列表',
                iconCls: 'x-fa fa-paper-plane',
                // viewType: 'email',
                expanded: false,
                selectable: false,
                children: [{
                    text: '未分页Grid',
                    iconCls: 'x-fa fa-flask',
                    viewType: 'view_grid_nopage_grid',
                    routeId: 'list/nopage',
                    leaf: true
                }, {
                    text: '分页Grid',
                    iconCls: 'x-fa fa-flask',
                    viewType: 'view_grid_page_grid',
                    leaf: true
                }]
            },
            {
                text: '邮件',
                iconCls: 'x-fa fa-paper-plane',
                viewType: 'email',
                leaf: true
            },
            {
                text: '列表',
                iconCls: 'x-fa fa-flask',
                viewType: 'view_grid',
                leaf: true
            },
            {
                text: '列表1',
                iconCls: 'x-fa fa-flask',
                viewType: 'view_gridDemo',
                leaf: true
            },
            {
                text: '个人中心',
                iconCls: 'x-fa fa-user',
                viewType: 'profile',
                leaf: true
            },
            {
                text: '搜索',
                iconCls: 'x-fa fa-search',
                viewType: 'searchresults',
                leaf: true
            },
            {
                text: '反馈',
                iconCls: 'x-fa fa-question',
                viewType: 'faq',
                leaf: true
            },
            {
                text: '子节点',
                iconCls: 'x-fab fa-leanpub',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [{
                        text: '子节点一',
                        iconCls: 'x-fa fa-file',
                        viewType: 'pageblank',
                        leaf: true
                    },

                    {
                        text: '404 Error',
                        iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    },
                    {
                        text: '500 Error',
                        iconCls: 'x-fa fa-times-circle',
                        viewType: 'page500',
                        leaf: true
                    },
                    {
                        text: 'Lock Screen',
                        iconCls: 'x-fa fa-lock',
                        viewType: 'lockscreen',
                        leaf: true
                    },

                    {
                        text: 'Login',
                        iconCls: 'x-fa fa-check',
                        viewType: 'login',
                        leaf: true
                    },
                    {
                        text: 'Register',
                        iconCls: 'x-fa fa-edit',
                        viewType: 'register',
                        leaf: true
                    },
                    {
                        text: 'Password Reset',
                        iconCls: 'x-fa fa-lightbulb',
                        viewType: 'passwordreset',
                        leaf: true
                    }
                ]
            },
            {
                text: '组件',
                iconCls: 'x-fa fa-flask',
                viewType: 'widgets',
                leaf: true
            },
            {
                text: '表单',
                iconCls: 'x-fa fa-edit',
                viewType: 'forms',
                leaf: true
            },
            {
                text: '图表',
                iconCls: 'x-fa fa-chart-pie',
                viewType: 'charts',
                leaf: true
            }
        ]
    }
});