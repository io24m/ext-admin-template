/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'App.Application',

    name: 'App',

    requires: [
        // This will automatically load all classes in the App namespace
        // so that application classes do not need to require each other.
        'App.*'
        // 'App.base.*',
        // 'App.override.*',
        // 'App.proxy'
    ],

    // The name of the initial view to create.
    // mainView: 'App.view.main.Main'
});