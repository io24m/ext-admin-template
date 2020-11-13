Ext.define('Admin.common.login.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.common_login',

    data: {
        userid : '',
        fullName : '',
        password : '',
        email    : '',
        persist: false,
        agrees : false
    }
});