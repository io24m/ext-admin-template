// Ext.define('App.override.data.proxy.Ajax', {
//     override: 'Ext.data.proxy.Ajax', 
//     sendRequest: function(request) {
//         request.setRawRequest(App.common.utils.Http.request(request.getCurrentConfig()));
//         this.lastRequest = request;
 
//         return request;
//     },
// });