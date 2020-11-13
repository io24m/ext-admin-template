Ext.define("Admin.view.grid.GridController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.view_grid', 
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
    }
});