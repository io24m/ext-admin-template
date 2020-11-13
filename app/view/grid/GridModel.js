Ext.define('Admin.view.grid.GridModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Admin.view.grid.GridStore'
    ],
    alias: 'viewmodel.view_grid',
    stores: {
        gridstore: { 
            type: 'view_grid'
        }
    },
});