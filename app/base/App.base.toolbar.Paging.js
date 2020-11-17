Ext.define('App.base.toolbar.Paging', {
    extend: 'Ext.toolbar.Paging',
    xtype: 'base_pagingtoolbar',
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    pageSize: 15,
    pageSizes: [],
    toChangePage: function (obj) {
        var me = this,
            pageSize = obj.pageSize;
        me.store.setPageSize(pageSize);
        var btn = me.down('button[name=pageButton]');
        btn.setText('每页' + pageSize + '条');
        if (!me._notFireChange) {
            me.moveFirst();
        }
    },
    initComponent: function () {
        var me = this;
        var allPage = me.pageSizes;
        if (!allPage || allPage.length === 0) {
            return
        }
        allPage.push(me.pageSize);
        allPage = allPage.sort(function (a, b) {
            return b - a;
        })
        var pageItems = allPage.map(function (item) {
            return {
                text: item,
                pageSize: item,
                handler: function (obj) {
                    me.toChangePage(obj);
                }
            }
        });

        me.items = [{
            xtype: 'button',
            name: 'pageButton',
            text: '每页' + me.pageSize + '条',
            menu: {
                width: 50,
                items: pageItems
            }
        }]

        me.callParent();
    }
});