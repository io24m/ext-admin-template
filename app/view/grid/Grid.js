Ext.define("Admin.view.grid.Grid", {
    extend: 'Ext.grid.Panel',
    xtype: 'view_grid',
    requires: [
        'Admin.view.grid.GridController',
        'Admin.view.grid.GridModel',
        'Admin.view.grid.GridStore'
    ],
    controller: 'view_grid',
    viewmodel: 'view_grid',
    title: 'grid',
    store: {
        type: 'view_grid'
    },
    columns: [{
            text: '姓名',
            dataIndex: 'name'
        },
        {
            text: '邮件',
            dataIndex: 'email',
            flex: 1
        },
        {
            text: '电话',
            dataIndex: 'phone',
            flex: 1
        }
    ],
    listeners: {
        select: 'onItemSelected'
    }
});