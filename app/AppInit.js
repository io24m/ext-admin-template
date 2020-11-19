Ext.define('App.AppInit', {
    singleton: true,
    init: function () {
        var me = this;
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