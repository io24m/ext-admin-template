Ext.define("App.common.login.LoginController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.common_login',
    onLogin: function () {
        //进行用户验证
        //获取权限数据
        localStorage.setItem("isLogin", true);
        this.getView().destroy();
        Ext.widget('common_layout_main');
        this.redirectTo('home', true);
    }
});