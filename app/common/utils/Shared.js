Ext.define('App.common.utils.Shared', {
    singleton: true,
    addCss: function (url) {
        var doc = document;
        var link = doc.createElement("link");
        var newUrl = url;
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", newUrl);
        var heads = doc.getElementsByTagName("head");
        if (heads.length) {
            heads[0].appendChild(link);
        } else {
            doc.documentElement.appendChild(link);
        }
    },
    addJs: function (url) {
        var t = Object.prototype.toString.call(url);
        if (t === "[object String]") {
            url = [url];
        }
        url = url.map(function (item) {
            return '<script src="' + item + '" type="text\/javascript"><\/scriptasync>';
        })
        document.write(url.join());
    },
    test: function () {
        console.log("utils.test")
    },

});