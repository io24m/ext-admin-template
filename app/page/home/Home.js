Ext.define('App.view.home.Home', {
    extend: 'Ext.container.Container',
    xtype: 'page_home_home',
    margin: '10 0 0 10',
    scrollable: 'y',
    defaults: {
        margin: '2 2 2 2',
    },
    items: [{
        xtype: 'button',
        text: 'show',
        handler: function () {
            App.util.Toast.show("信息");
        }
    },{
        xtype: 'button',
        text: 'info',
        handler: function () {
            App.util.Toast.info("信息");
        }
    }, {
        xtype: 'button',
        text: 'notify',
        handler: function () {
            App.util.Toast.notify("通知")
        }
    }, {
        xtype: 'button',
        text: 'warn',
        handler: function () {
            App.util.Toast.warn("警告")
        }
    }, {
        xtype: 'button',
        text: 'error',
        handler: function () {
            // App.util.Toast.error("错误")
            App.util.Http.post({
                url: '/err'
            }).then(function (res) {
                debugger
            })
        }
    }]
});