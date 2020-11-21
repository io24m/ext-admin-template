Ext.define('App.view.home.Home', {
    extend: 'Ext.container.Container',
    xtype: 'home',
    margin: '10 0 0 10', 
    scrollable: 'y',
    items: [{
        xtype: 'button',
        text: 'click',
        handler: function () {
            App.util.Http.post({
                url: '/err'
            }).then(function (res) {
                debugger
            })
        }
    }]
});