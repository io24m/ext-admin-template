Ext.define('App.proxy.Api', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.api',
    actionMethods: {
        create: 'POST',
        read: 'GET',
        update: 'POST',
        destroy: 'POST'
    },
    reader: {
        type: 'json',
        rootProperty: 'result.songs',
        totalProperty: "result.songCount"
    },
    pageParam: 'offset',
    limitParam: 'limit',
});