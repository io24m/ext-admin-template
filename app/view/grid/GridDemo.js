Ext.define("Admin.view.grid.GridDemo", {
    extend: 'Admin.base.grid.Panel',
    xtype: 'view_gridDemo',
    requires: [
        'Admin.view.grid.GridDemoController',
        'Admin.view.grid.GridDemoModel'
    ],
    controller: 'view_gridDemo',
    viewModel: {
        type: 'view_gridDemo'
    },
    title: 'gridDemo',
    readUrl: 'http://localhost:8849/search?keywords=好汉歌',
    page: true,
    pageSize: 12,
    //autoLoad:true,
    tbar: ['->', {
        xtype: 'button',
        ui: 'blue',
        text: '检索',
        handler: 'search'
    }],
    columns: [{
            text: 'id',
            dataIndex: 'id'
        }, {
            text: '姓名',
            dataIndex: 'name',
            width: 300
        },
        {
            text: '邮件',
            dataIndex: 'email',
            width: 300
        },
        {
            text: '邮件',
            dataIndex: 'email',
            width: 700
        },
        {
            text: '电话',
            dataIndex: 'phone',
            minWidth: 100,
            flex: 1
        }
    ],
});