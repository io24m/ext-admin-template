Ext.define('Admin.view.grid.GridDemoModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        //'Admin.view.grid.GridStore'
    ],
    alias: 'viewmodel.view_gridDemo',
    data:{
        readUrl:"http://localhost:8849/search?keywords=好汉歌"
    }
});