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
    launch: function () {

        //

        //登录逻辑
        var loggedIn;
        loggedIn = localStorage.getItem("isLogin");
        //获取权限数据
        //加载指定视图
        Ext.widget('app-main');
        // Ext.widget(loggedIn ? 'common_layout_main' : 'common_login');
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