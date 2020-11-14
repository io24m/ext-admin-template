Ext.define('Admin.base.data.Store', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
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
        api: {
            // read: '',
        }
    },
    pageSize: 15
});