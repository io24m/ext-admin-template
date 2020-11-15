Ext.define('Admin.common.layoutwin.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.common_layoutwin_main',
    //监听：当找不到匹配的路由时将执行该事件unmatchedroute
    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onRouteChange'
            }
        }
    },
    //全局路由信息
    routes: {
        ':node': 'onRouteChange'
    },
    //折叠菜单

    onToggleNavigationSize: function () {
        var me = this,
            refs = me.getReferences(),
            senchaLogo = refs.senchaLogo,
            navigationContainer = refs.navigationContainer,
            navigationTreeListContainer = refs.navigationTreeListContainer,
            treelist = me.getView().down('treelist'),
            ct = treelist.ownerCt,
            maxWidth = 250,
            minWidth = 44;
        if (me.pressed === undefined) {
            me.pressed = false;
        }
        Ext.suspendLayouts();
        treelist.setMicro(!me.pressed);
        if (me.pressed) {
            ct.setWidth(maxWidth);
            senchaLogo.animate({
                dynamic: true,
                to: {
                    width: maxWidth
                }
            });
            navigationContainer.setWidth(maxWidth);
            // navigationTreeListContainer.setWidth(maxWidth + 17);
            navigationTreeListContainer.animate({
                dynamic: true,
                to: {
                    width: maxWidth + 17
                }
            });
        } else {
            ct.setWidth(minWidth);
            senchaLogo.animate({
                dynamic: true,
                to: {
                    width: minWidth
                }
            });
            navigationContainer.setWidth(minWidth);
            // navigationTreeListContainer.setWidth(minWidth + 17);
            navigationTreeListContainer.animate({
                dynamic: true,
                to: {
                    width: minWidth + 17
                }
            });
        }
        // Cookie.set(AppConfig.cookieStartWith + "main-left-panel-micro" + me.cookieEndWith, !me.pressed, 365);

        me.pressed = !me.pressed;
        // if (Ext.isIE8) {
        //     this.repaintList(treelist, !me.pressed);
        // }
        //触发多分辨率兼容更新
        // Ext.GlobalEvents.fireEvent('resize');
        Ext.resumeLayouts(true);
    },
    //点击菜单
    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        if (to) {
            this.redirectTo(to);
        }
    },
    //路由更改事件
    onRouteChange: function (id) {
        this.setCurrentView(id);
    },
    setCurrentView: function (hashTag) {
        hashTag = (hashTag || '').toLowerCase();
        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.navigationTreeList,
            store = navigationList.getStore(),
            node = store.findNode('routeId', hashTag) ||
            store.findNode('viewType', hashTag),
            view = (node && node.get('viewType')) || 'page404',
            lastView = me.lastView,
            existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
            newView;

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        lastView = mainLayout.getActiveItem();

        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                routeId: hashTag, // for existingItem search later
                hideMode: 'offsets'
            });
        }

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView isWindow
            // we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            } else {
                // newView is set (did not exist already), so add it and make it the
                // activeItem.
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }

        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }

        me.lastView = newView;
    },
});