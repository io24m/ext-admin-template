Ext.define('App.base.data.Store', {
    extend: 'Ext.data.Store',
    loadPage: function (page, options) {
        var me = this;
        var proxy = me.getProxy();
        if (options && options.params && proxy) {
            proxy.setExtraParams(options.params);
        }
        me.callParent([page, options]);
    },
    proxy: {
        type: 'api',
        api: {
            // read: '',
        }
    },
    pageSize: 15
});