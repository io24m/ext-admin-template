Ext.define("Admin.view.grid.Grid", {
    extend: 'Ext.grid.Panel',
    xtype: 'view_grid',
    requires: [
        'Admin.view.grid.GridController',
        'Admin.view.grid.GridModel',
        // 'Admin.view.grid.GridStore'
    ],
    controller: 'view_grid',
    // viewmodel: 'view_grid',
    viewModel: {
        type: 'view_grid'
    },
    // title: 'grid',
    bind: {
        store: '{gridstore}'
    },
    tbar: ['->', {
        xtype: 'button',
        ui: 'blue',
        text: '检索',
        handler: 'search'
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        // displayInfo:true,
        dock: 'bottom',
        bind: {
            store: '{gridstore}'
        },
        // store: {
        //     type: 'view_grid'
        // },
        // moveNext: function() {
        //     debugger
        //     var me = this,
        //         store = me.store,
        //         total = me.getPageData().pageCount,
        //         next = store.currentPage + 1;

        //     if (next <= total) {
        //         if (me.fireEvent('beforechange', me, next) !== false) {
        //             store.nextPage();

        //             return true;
        //         }
        //     }

        //     return false;
        // },
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
    listeners: {
        select: 'onItemSelected'
    }
});