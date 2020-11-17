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
        console.log("AppInit.init")
    }
});