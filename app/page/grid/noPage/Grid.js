Ext.define("App.view.grid.noPage.Grid", {
    extend: 'App.base.grid.Panel',
    xtype: 'page_grid_nopage_grid',
    requires: [
        'App.view.grid.noPage.GridController',
        'App.view.grid.noPage.GridModel'
    ],
    controller: 'view_grid_nopage_grid',
    viewModel: {
        type: 'view_grid_nopage_grid'
    },
    readUrl: '/list',
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
            text: '电话',
            dataIndex: 'phone',
            minWidth: 100,
            flex: 1
        }
    ],
});