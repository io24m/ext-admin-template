Ext.define("Admin.base.grid.Panel", {
    extend: 'Ext.grid.Panel',
    xtype: 'base_grid',
    config: {
        readUrl: '',
    },
    viewModel: Ext.create('Ext.app.ViewModel'),
    page: false,
    pageSize: 15,
    initComponent: function () {
        var me = this;
        if (!me.page) {
            me.callParent();
            return;
        }
        if (!me.getReadUrl()) {
            console.error("配置base_grid:readUrl")
            return;
        }
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
        me.dockedItems = [{
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            bind: {
                store: bindStoreName
            }
        }];
        me.callParent();
    }
});