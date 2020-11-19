Ext.define('App.proxy.Api', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.api',
    actionMethods: {
        create: 'POST',
        read: 'POST',
        update: 'POST',
        destroy: 'POST'
    },
    reader: {
        type: 'json',
        rootProperty: 'result',
        totalProperty: "count"
    },
    pageParam: 'offset',
    limitParam: 'limit',
});