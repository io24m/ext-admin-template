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
    }
});