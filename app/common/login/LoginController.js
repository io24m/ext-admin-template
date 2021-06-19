Ext.define("App.common.login.LoginController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.common_login',
    onLogin: function () {
        //进行用户验证
        //获取权限数据
        var me = this,
            view = me.getView(),
            vm = me.getViewModel();
        App.util.Http.post({
            url: "/auth/login",
            params: {
                account: vm.get("userid"),
                password: vm.get("password")
            }
        }).then(function (res) {
            App.util.Storage.setToken(res.result)
            view.destroy();
            window.location.reload();
        });
    }
});