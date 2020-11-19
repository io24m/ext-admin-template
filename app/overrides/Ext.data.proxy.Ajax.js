Ext.define('App.override.data.proxy.Ajax', {
    override: 'Ext.data.proxy.Ajax',
    sendRequest: function (request) {
        // request.setRawRequest(Ext.Ajax.request(request.getCurrentConfig()));
        request.setRawRequest(App.common.utils.Http.requestStore(request.getCurrentConfig()));
        this.lastRequest = request;

        return request;
    },
    createRequestCallback: function (request, operation) {
        var me = this;
        return function (options, success, response) {
            if (request === me.lastRequest) {
                me.lastRequest = null;
            }
            if (!me.destroying && !me.destroyed) {
                me.processResponse(success, operation, request, response);
            }
        };
    },
});