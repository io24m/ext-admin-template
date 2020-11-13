Ext.define("Admin.common.login.LoginController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.common_login',
    onLogin: function () {
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("isLogin", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.widget('common_layout_main');
        // this.redirectTo('dashboard', true);
    }
});