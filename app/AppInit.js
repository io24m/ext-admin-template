Ext.define('App.AppInit', {
    singleton: true,
    loadJSCSSFile: function (fileName, callback) {
        var fileref = null;
        var arr = fileName.split('.');
        switch (arr[arr.length - 1]) {
            case 'js':
                fileref = document.createElement('script');
                fileref.setAttribute('type', 'text/javascript');
                fileref.setAttribute('src', fileName);
                break;
            case 'css':
                fileref = document.createElement('link');
                fileref.setAttribute('rel', 'stylesheet');
                fileref.setAttribute('type', 'text/css');
                fileref.setAttribute('herf', fileName);
                break;
        }
        if (fileref != null) {
            if (fileref.readyState) { // IE  
                fileref.onreadystatechange = function () {
                    if (fileref.readyState == 'loaded' || fileref.readyState == 'complete') {
                        fileref.onreadystatechange = null;
                        callback();
                    }
                };
            } else { // Others: Firefox, Safari, Chrome, and Opera  
                fileref.onload = function () {
                    callback();
                };
            }
            document.getElementsByTagName('head')[0].appendChild(fileref);
        }
    },
    init: function () { 
        // App.common.utils.Shared.addCss('resources/lib/nprogress-0.2.0/nprogress.css')
        // App.common.utils.Shared.addJs('resources/lib/nprogress-0.2.0/nprogress.js')


        var me = this;
        // me.loadJSCSSFile('resources/lib/nprogress-0.2.0/nprogress.css',function(){});
        // me.loadJSCSSFile('resources/lib/nprogress-0.2.0/nprogress.js',function(){});
        Ext.Date.monthNames = [
            '一月', '二月', '三月',
            '四月', '五月', '六月',
            '七月', '八月', '九月',
            '十月', '十一月', '十二月',
        ];
        Ext.Date.dayNames = [
            "日", "一", "二", "三", "四", "五", "六"
        ]
        Ext.Date.defaultFormat = 'Y-m-d';
        // Ext.Date.format(d, '"Y-m-d H:i:s"')
        Ext.Ajax.setTimeout(10 * 60 * 1000);

        console.log("AppInit.init")
    }
});
// Ext.onReady(function() {
//     debugger
//     Ext.Date.monthNames = [
//         '一月', '二月', '三月',
//         '四月', '五月', '六月',
//         '七月', '八月', '九月',
//         '十月', '十一月', '十二月',
//     ];
//     Ext.Date.dayNames = [
//         "日", "一", "二", "三", "四", "五", "六"
//     ]
//     Ext.Date.defaultFormat = 'Y-m-d';
//     // Ext.Date.format(d, '"Y-m-d H:i:s"')
//     Ext.Ajax.setTimeout(10 * 60 * 1000);
//     console.log("AppInit.init")
// });