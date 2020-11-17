Ext.define('App.view.home.Home', {
    extend: 'Ext.container.Container',
    xtype: 'home',
    // margin: '20 0 0 20', 
    scrollable: 'y',
    html: 'home<br/><br/><br/><br/><br/><br/>' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home' +
        '<br/><br/><br/><br/><br/><br/><br/>home',
    initComponent: function () {
        var me = this;
        // debugger
        // app.slimScroll
        me.callParent();
    }
});