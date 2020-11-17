Ext.define('App.commmon.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'common_login',

    requires: [
        'App.common.login.LoginController',
        'App.common.login.LoginModel',
        'Ext.layout.container.VBox',
        'Ext.container.Container',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'Ext.button.Button'
    ],
    controller: 'common_login',
    viewModel: {
        type: 'common_login'
    },
    // cls: 'auth-locked-window',
    closable: false,
    resizable: false,
    autoShow: true,
    titleAlign: 'center',
    maximized: true,
    modal: true,
    scrollable: true,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    title: '登录系统',
    items: [{
        xtype: 'form',
        bodyPadding: '20 20',
        header: false,
        width: 415,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            margin: '5 0'
        },
        items: [{
                xtype: 'label',
                text: '登录您的账户'
            },
            {
                xtype: 'textfield',
                // cls: 'auth-textbox',
                name: 'userid',
                bind: '{userid}',
                height: 55,
                hideLabel: true,
                allowBlank: false,
                emptyText: '用户名',
                // triggers: {
                //     glyphed: {
                //         cls: 'trigger-glyph-noop auth-email-trigger'
                //     }
                // }
            },
            {
                xtype: 'textfield',
                // cls: 'auth-textbox',
                height: 55,
                hideLabel: true,
                emptyText: '密码',
                inputType: 'password',
                name: 'password',
                bind: '{password}',
                allowBlank: false,
                // triggers: {
                //     glyphed: {
                //         cls: 'trigger-glyph-noop auth-password-trigger'
                //     }
                // }
            },
            // {
            //     xtype: 'container',
            //     layout: 'hbox',
            //     items: [{
            //             xtype: 'checkboxfield',
            //             flex: 1,
            //             cls: 'form-panel-font-color rememberMeCheckbox',
            //             height: 30,
            //             bind: '{persist}',
            //             boxLabel: 'Remember me'
            //         }
            //     ]
            // },
            {
                xtype: 'checkboxfield',
                flex: 1,
                cls: 'form-panel-font-color rememberMeCheckbox',
                height: 30,
                bind: '{persist}',
                boxLabel: '记住我'
            },
            {
                xtype: 'button',
                reference: 'loginButton',
                scale: 'large',
                // ui: 'soft-green',
                iconAlign: 'right',
                iconCls: 'x-fa fa-angle-right',
                text: '登录',
                formBind: true,
                listeners: {
                    click: 'onLogin'
                }
            },
            // {
            //     xtype: 'box',
            //     html: '<div class="outer-div"><div class="seperator">OR</div></div>',
            //     margin: '10 0'
            // },
            // {
            //     xtype: 'button',
            //     scale: 'large',
            //     ui: 'facebook',
            //     iconAlign: 'right',
            //     iconCls: 'x-fab fa-facebook',
            //     text: 'Login with Facebook',
            //     listeners: {
            //         click: 'onFaceBookLogin'
            //     }
            // },
            // {
            //     xtype: 'box',
            //     html: '<div class="outer-div"><div class="seperator">OR</div></div>',
            //     margin: '10 0'
            // },
            // {
            //     xtype: 'button',
            //     scale: 'large',
            //     ui: 'gray',
            //     iconAlign: 'right',
            //     iconCls: 'x-fa fa-user-plus',
            //     text: 'Create Account',
            //     listeners: {
            //         click: 'onNewAccount'
            //     }
            // }
        ]
    }]
});