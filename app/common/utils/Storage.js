Ext.define('App.common.utils.Storage', {
    singleton: true,
    getToken: function () {
        return localStorage.getItem("Admin-Token");
    },
    setToken: function (token) {
        localStorage.setItem("Admin-Token", token || "")
    }
});