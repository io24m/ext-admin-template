Ext.define('App.common.utils.Http', {
    singleton: true,
    getOpts: function (opts) {
        var me = this;
        if (opts.url) {
            opts.url = App.Settings.baseUrl + opts.url;
        }
        return Ext.apply({}, {
                headers: me.getHeaders()
            },
            opts);
    },
    getHeaders: function () {
        var headers = {};
        headers['Access-Control-Allow-Credentials'] = true;
        var token = App.common.utils.Storage.getToken();
        if (token) {
            headers['Admin-Token'] = token;
        }
        return headers;
    },
    baseRequest: function (opts) {
        var me = this;
        opts = me.getOpts(opts);
        return new Ext.Promise(function (resolve, reject) {
            Ext.Ajax.request(Ext.apply({}, {
                    callback: function (options, success, response) {
                        if (!success) {
                            App.common.utils.Toast.error("网络断开");
                            return;
                        }
                        // var res = Ext.JSON.decode(response.responseText);
                        resolve(response);
                    }
                },
                opts));
        });
    },
    auth: function (opts) {
        var me = this;
        return new Ext.Promise(function (resolve, reject) {
            me.baseRequest(opts).then(function (res) {
                if (res && res.status === 401) {
                    reject(res);
                } else {
                    var data = Ext.JSON.decode(res.responseText);
                    resolve(data);
                }
                // if (res.code === 0) {
                //     reject(res);
                // } else {
                //     resolve(res);
                // }
            })
        });
    },
    request: function (opts) {
        var me = this;
        return new Ext.Promise(function (resolve, reject) {
            me.auth(opts).then(function (res) {
                if (res.success === false) {
                    App.common.utils.Toast.error(res.message);
                    // reject(res);
                    return;
                }
                resolve(res);
            }).catch(function (err) {
                Ext.Msg.alert('登录过期', "请重新登录。", function () {
                    App.common.utils.Storage.setToken();
                    window.location.reload()
                });
            });
        });
    },
    requestStore: function (opts) {
        var me = this;
        opts = me.getOpts(opts);
        return Ext.Ajax.request(Ext.apply({}, {
                callback: function (options, success, response) {
                    if (!success) {
                        App.common.utils.Toast.error("网络断开");
                        return;
                    }
                    if (response && response.status === 401) {
                        Ext.Msg.alert('登录过期', "请重新登录。", function () {
                            App.common.utils.Storage.setToken();
                            window.location.reload()
                        });
                        return
                    }

                    if (response && response.responseJson) {
                        // if (response.responseJson.code === 0) {
                        //     Ext.Msg.alert('登录过期', "请重新登录。", function () {
                        //         App.common.utils.Storage.setToken();
                        //         window.location.reload()
                        //     });
                        //     return
                        // }
                        var res = response.responseJson;
                        if (res.success === false) {
                            App.common.utils.Toast.error(res.message);
                        }
                    }
                    opts.callback(options, success, response);
                }
            },
            opts));
    },
    get: function (opts) {
        opts.method = "GET";
        return this.request(opts);
    },
    post: function (opts) {
        opts.method = "POST";
        return this.request(opts);
    }
});