/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    name: 'App',
    defaultToken: 'home',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    init: function () {
        // var me = this;
        App.util = App.common.utils;
        App.AppInit.init();
    },
    launch: function () {
        var me = this;
        //登录逻辑  
        if (!App.util.Storage.getToken()) {
            Ext.widget('common_login');
            return;
        }
        NProgress.start();
        // Ext.widget('common_layoutwin_main');
        // me.redirectTo("home", true);
        // return
        var server = Ext.ns("App.Server");
        App.util.Http.auth({
            url: "/auth/data",
            params: {
                auth: "A"
            }
        }).then(function (res) {
            server.menu = [];
            console.log("加载权限：")
            console.log(res)
            return App.util.Http.auth({
                url: "/auth/data",
                params: {
                    auth: "B"
                }
            });
        }).then(function (res) {
            console.log("加载权限：")
            console.log(res)
            console.log("初始化")
            // App.AppInit.init();
            Ext.widget('common_layoutwin_main');
            me.redirectTo("home", true);
            NProgress.done();
        }).catch(function (err) {
            NProgress.done();
            Ext.widget('common_login');
        });
    }
});