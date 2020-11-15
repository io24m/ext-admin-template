/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    name: 'Admin',
    defaultToken: 'home',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    mixins: {
        utils: 'Admin.common.utils.Utils',
        appInit: 'Admin.AppInit'
    },
    launch: function () {
        //初始化
        var me = this;
        me.mixins.appInit.init();
        me.utils = me.mixins.utils;
        window.app = me;
        //登录逻辑
        var loggedIn;
        loggedIn = localStorage.getItem("isLogin");
        if (!loggedIn) {
            Ext.widget('common_login');
            return;
        }
        //获取权限数据
        //加载指定视图
        // Ext.widget(loggedIn ? 'common_layout_main' : 'common_login');
        Ext.widget(loggedIn ? 'common_layoutwin_main' : 'common_login');
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});