Ext.define('App.common.utils.Toast', {
    singleton: true,
    show: function (msg, title) {
        Ext.toast({
            title: title,
            html: msg,
            closable: true,
            align: 't',
            frame: false,
            slideInDuration: 400,
            autoClose: true,
            minHeight: 100,
            width: 400,
            minWidth: 400,
            bodyBorder: true
        });
    },
    info: function (msg, title) {
        App.common.utils.Toast.show('<b style="color:#67C23A;font-size: 14px">' + (msg || '') + '</b>', title || '提示');
    },
    notify: function (msg, title) {
        App.common.utils.Toast.show('<b style="color:#1B65B9;font-size: 14px">' + (msg || '') + '</b>', title || '通知');
    },
    warn: function (msg, title) {
        App.common.utils.Toast.show('<b style="color:#E6A23C;font-size: 14px">' + (msg || '') + '</b>', title || '警告');
    },
    error: function (msg, title) {
        App.common.utils.Toast.show('<b style="color:#F56C6C;font-size: 14px">' + (msg || '') + '</b>', title || '错误');
    },
});