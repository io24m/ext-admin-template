// Ext.define('App.override.data.request.Ajax', {
//     override: 'Ext.data.request.Ajax',
//     onComplete: function (xdrResult) {
//         var me = this,
//             owner = me.owner,
//             options = me.options,
//             xhr = me.xhr,
//             failure = {
//                 success: false,
//                 isException: false
//             },
//             result, success, response;

//         if (!xhr || me.destroyed) {
//             return me.result = failure;
//         }

//         try {
//             result = Ext.data.request.Ajax.parseStatus(xhr.status, xhr);

//             if (result.success) {
//                 // This is quite difficult to reproduce, however if we abort a request
//                 // just before it returns from the server, occasionally the status will be
//                 // returned correctly but the request is still yet to be complete.
//                 result.success = xhr.readyState === 4;
//             }
//         } catch (e) {
//             // In some browsers we can't access the status if the readyState is not 4,
//             // so the request has failed
//             result = failure;
//         }

//         success = me.success = me.isXdr ? xdrResult : result.success;

//         if (success) {
//             response = me.createResponse(xhr);

//             if (owner.hasListeners.requestcomplete) {
//                 owner.fireEvent('requestcomplete', owner, response, options);
//             }

//             if (options.success) {
//                 Ext.callback(options.success, options.scope, [response, options]);
//             }
//         } else {
//             if (result.isException || me.aborted || me.timedout) {
//                 response = me.createException(xhr);
//             } else {
//                 response = me.createResponse(xhr);
//             }

//             if (owner.hasListeners.requestexception) {
//                 owner.fireEvent('requestexception', owner, response, options);
//             }

//             if (options.failure) {
//                 Ext.callback(options.failure, options.scope, [response, options]);
//             }
//         }

//         me.result = response;

//         if (options.callback) {
//             if (response.responseJson) {
//                 response.responseText = Ext.JSON.encode(response.responseJson)
//             }
//             Ext.callback(options.callback, options.scope, [options, success, response]);
//         }

//         owner.onRequestComplete(me);

//         me.callParent([xdrResult]);

//         return response;
//     },
// });