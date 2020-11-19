// Ext.define('App.override.data.Connection', {
//     override: 'Ext.data.Connection',
//     request: function (options) {
//         var me = this,
//             requestOptions, request, customCallback;

//         options = options || {};
//         customCallback = options.callback;
//         options.callback = function (options, success, response) {
//             debugger
//             var data = {};
//             if (success && response.responseText) {
//                 data = Ext.JSON.decode(response.responseText);
//             }
//             customCallback.call(options.scope, options, success, response, data);
//         }
//         if (me.fireEvent('beforerequest', me, options) !== false) {
//             requestOptions = me.setOptions(options, options.scope || Ext.global);

//             request = me.createRequest(options, requestOptions);

//             return request.start(requestOptions.data);
//         }

//         // Reusing for response
//         request = {
//             status: -1,
//             statusText: 'Request cancelled in beforerequest event handler'
//         };
//         Ext.callback(options.callback, options.scope, [options, false, request]);

//         return Ext.Deferred.rejected([options, false, request]);
//     },
// });