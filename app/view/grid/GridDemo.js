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
    selModel: {
        selType: 'checkboxmodel',
        injectCheckbox: 0,
        mode: 'simple',
        checkOnly: true,
        allowDeselect: true
    },
    tbar: ['->', {
        xtype: 'button',
        ui: 'blue',
        text: '检索',
        handler: 'search'
    }, {
        xtype: 'button',
        ui: 'blue',
        text: '操作',
        handler: 'op'
    }],
    enableLocking: false,
    lockText: '锁定',
    unlockText: '解锁',
    columns: [{
            xtype: 'actioncolumn',
            width: 100,
            text: '操作',
            items: [{
                iconCls: 'x-fa fa-edit',
                tooltip: '编辑',
                getStyle: function () {
                    return 'margin-right:10px;'
                },
                handler: function (grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    //alert("Edit " + rec.get('name'));
                }
            }, {
                //icon: 'extjs-build/examples/restful/images/delete.png',
                iconCls: 'x-fa fa-cog',
                tooltip: '删除',
                handler: 'del'
            }]
        }, {
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