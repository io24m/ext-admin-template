Ext.define("Admin.view.grid.GridDemoController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.view_gridDemo',
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
        var view = me.getView();
        var store = view.getStore();
        store.loadPage(1);
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