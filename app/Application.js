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
    launch: function () {
        //初始化
        App.Util = App.common.utils;
        //登录逻辑 
        if (!localStorage.getItem("Admin-Token")) {
            Ext.widget('common_login');
            return;
        }

        App.Util.Http.auth({
            url: "/auth",
            params: {
                auth: "A"
            }
        }).then(function (res) {
            console.log("加载权限：")
            console.log(res)
            return App.Util.Http.auth({
                url: "/auth",
                params: {
                    auth: "B"
                }
            });
        }).then(function (res) {
            console.log("加载权限：")
            console.log(res)
            return App.Util.Http.auth({
                url: "/auth",
                params: {
                    auth: "C"
                }
            });
        }).then(function (res) {
            console.log("加载权限：")
            console.log(res)
            console.log("初始化")
            App.AppInit.init();
            Ext.widget('common_layoutwin_main');
        }).catch(function (err) {
            Ext.widget('common_login');
        });
    }
});