Ext.define("Admin.base.grid.Panel", {
    extend: 'Ext.grid.Panel',
    requires: [
        'Admin.base.toolbar.Paging'
    ],
    xtype: 'base_grid',
    config: {
        readUrl: '',
    },
    viewModel: Ext.create('Ext.app.ViewModel'),
    page: false,
    pageSize: 15,
    pageSizes: [10, 30, 200, 1000],
    initComponent: function () {
        var me = this;
        var storeName = "gridStore" + Ext.Date.format(new Date(), "mdHis");
        var bindStoreName = "{" + storeName + "}";
        me.setBind({
            store: bindStoreName
        });
        vm = me.getViewModel();
        var stores = {};
        stores[storeName] = Ext.create("Admin.base.data.Store", {
            proxy: {
                api: {
                    read: me.getReadUrl()
                }
            },
            pageSize: me.pageSize
        });
        vm.setStores(stores);
        if (me.page) {
            // var pageItems = [];
            // var clickMenu = function (obj) {
            //     var pse = obj.pageSize;
            //     me.store.setPageSize(v);
            //     if (!me._notFireChange) {
            //         me.moveFirst();
            //     }
            //     debugger
            // }
            var pageItems = me.pageSizes.map(function (item) {
                return {
                    text: item,
                    pageSize: item,
                    handler: 'toChangePage'
                }
            });
            pageItems.push({
                text: me.pageSize
            })
            pageItems = pageItems.sort(function (a, b) {
                return b.text - a.text;
            })
            me.dockedItems = [{
                xtype: 'base_pagingtoolbar',
                dock: 'bottom',
                margin: '0 0 0 0',
                padding: '0 0 0 0',
                pageSize: me.pageSize,
                pageSizes: me.pageSizes,
                bind: {
                    store: bindStoreName
                },
                // items: [{
                //     xtype: 'button',
                //     text: '每页' + me.pageSize + '条',
                //     menu: {
                //         width: 50,
                //         items: pageItems
                //     }
                // }]
            }];
        }
        me.callParent();
    },
    beforeLayout: function () {
        var me = this,
            height = Ext.Element.getViewportHeight() - 44;
        me.height = height;
        me.callParent(arguments);
    }
});