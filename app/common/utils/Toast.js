Ext.define('App.common.utils.Toast', {
    singleton: true,
    show: function (msg, title, color) {
        Ext.toast({
            title: title ? title : null,
            html: msg,
            closable: true,
            align: 't',
            frame: false,
            slideInDuration: 400,
            autoClose: true,
            // minHeight: 100,
            width: 400,
            minWidth: 400,
            bodyBorder: true,
            bodyStyle: {
                fontSize: '14px',
                color: color,
                fontWeight: '600'
            }
        });
    },
    info: function (msg, title) {
        App.common.utils.Toast.show(msg || '', title || '提示', "#67C23A");
    },
    notify: function (msg, title) {
        App.common.utils.Toast.show(msg || '', title || '通知', '#1B65B9');
    },
    warn: function (msg, title) {
        App.common.utils.Toast.show(msg || '', title || '警告', '#E6A23C');
    },
    error: function (msg, title) {
        App.common.utils.Toast.show(msg || '', title || '错误', '#F56C6C');
    },
});