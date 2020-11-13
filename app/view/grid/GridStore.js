Ext.define('Admin.view.grid.GridStore', {
    extend: 'Ext.data.Store',

    alias: 'store.view_grid',
    // fields:[ 'name', 'email', 'phone'],
    // model: 'myApp.model.Personnel',

    // data: {
    //     items: [{
    //             name: 'Jean Luc',
    //             email: "jeanluc.picard@enterprise.com",
    //             phone: "555-111-1111"
    //         }
    //     ]
    // },

    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // },
    proxy: {
        type: 'ajax',
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'result.songs',
            totalProperty: "result.songCount"
        },
        pageParam: 'offset',
        limitParam: 'limit',
        api: {
            read: 'http://localhost:8849/search?keywords=好汉歌',
        },
    },
    // limit: me.pagination.pageSize,
    // offset: pageIndex - 1,
    pageSize: 15
});