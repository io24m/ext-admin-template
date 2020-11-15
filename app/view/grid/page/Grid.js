Ext.define("Admin.view.grid.page.Grid", {
    extend: 'Admin.base.grid.Panel',
    xtype: 'view_grid_page_grid',
    requires: [
        'Admin.view.grid.page.GridController',
        'Admin.view.grid.page.GridModel'
    ],
    controller: 'view_grid_page_grid',
    viewModel: {
        type: 'view_grid_page_grid'
    },
    // title: 'gridDemo',
    readUrl: 'http://localhost:8849/search?keywords=好汉歌',
    page: true,
    pageSize: 32,
    //autoLoad:true,
    selModel: {
        selType: 'checkboxmodel',
        injectCheckbox: 0,
        mode: 'simple',
        checkOnly: true,
        allowDeselect: true
    },
    tbar: [{
        xtype: 'textfield',
        fieldLabel: '客户',
        labelAlign: "right",
        labelWidth: 50,
        width: 150,
        //bind: "{param.Kh}"
    }, {
        xtype: 'textfield',
        fieldLabel: '客户',
        labelAlign: "right",
    }, {
        xtype: 'datefield',
        fieldLabel: '客户',
        labelAlign: "right",
    }, {
        xtype: 'combo',
        fieldLabel: '客户',
        labelAlign: "right",
        store: Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data: [{
                    "abbr": "AL",
                    "name": "Alabama"
                },
                {
                    "abbr": "AK",
                    "name": "Alaska"
                },
                {
                    "abbr": "AZ",
                    "name": "Arizona"
                }
            ]
        }),
        queryMode: 'local',
        displayField: 'name',
        valueField: 'abbr',
    }, '->', {
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