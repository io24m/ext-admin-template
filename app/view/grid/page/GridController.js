Ext.define("App.view.grid.page.GridController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.view_grid_page_grid',
    onItemSelected: function (sender, record) {

        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    search: function () {
        var me = this;
        var param = {
            a: "1",
            b: "2"
        };
        var view = me.getView();
        var store = view.getStore();
        // var proxy = store.getProxy();
        // proxy.setExtraParams(param);
        store.loadPage(1, {
            params: param
        });
    },
    op: function () {
        var me = this;
        var view = me.getView();
        var selections = view.getSelection(); /**多选行**/

    },
    del: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        alert("Edit " + rec.get('name'));
    }
});