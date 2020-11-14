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
            me.dockedItems = [{
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                margin: '0 0 0 0',
                padding: '0 0 0 0',
                bind: {
                    store: bindStoreName
                },
                items: [{
                    xtype: 'button',
                    text: '每页15条',
                    menu: {
                        width: 50,
                        items: [{
                            text: '10'
                        }, {
                            text: '50'
                        }, {
                            text: '100'
                        }]
                    }
                }]
            }];
        }
        me.callParent();
    }
});