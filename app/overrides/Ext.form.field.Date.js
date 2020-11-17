Ext.define('App.override.form.field.Date', {
    override: 'Ext.form.field.Date',
    format: 'Y-m-d',
    formatText: '日期格式要求为: 年-月-日',
    invalidText: "{0} 是无效的日期 必须符合格式：年-月-日",
});