Ext.define('App.common.utils.Http', {
    singleton: true,
    baseRequest: function (opts) {
        opts.url = App.Settings.baseUrl + opts.url;
        var headers = {};
        headers['Access-Control-Allow-Credentials'] = true;
        var token = localStorage.getItem("Admin-Token");
        if (localStorage.getItem("Admin-Token")) {
            headers['Admin-Token'] = token;
        }
        return new Ext.Promise(function (resolve, reject) {
            Ext.Ajax.request(Ext.apply({}, {
                    headers: headers,
                    callback: function (options, success, response) {
                        var res = Ext.JSON.decode(response.responseText);
                        resolve(res);
                    }
                },
                opts));
        });
    },
    auth: function (opts) {
        var me = this;
        return new Ext.Promise(function (resolve, reject) {
            me.baseRequest(opts).then(function (res) {
                if (res.code === 0) {
                    reject(res);
                } else {
                    resolve(res);
                }
            })
        });
    },
    request: function (opts) {
        var me = this;
        // opts.method = "POST";
        return new Ext.Promise(function (resolve, reject) {
            me.auth(opts).then(function (res) {
                if (res.success === false) {
                    App.Util.Toast.error(res.message);
                    reject(res);
                    return;
                }
                resolve(res);
            }).catch(function (err) {
                Ext.Msg.alert('登录过期', "请重新登录或刷新页面。", function () {
                    localStorage.setItem("Admin-Token", "")
                    window.location.reload()
                });
            });
        });
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