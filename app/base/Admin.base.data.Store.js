Ext.define('Admin.base.data.Store', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'api',
        api: {
            // read: '',
        }
    },
    pageSize: 15
});