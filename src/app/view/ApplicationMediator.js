/**
 * Created by dqvsra on 3/16/17.
 */
(function () {
    ///////////////////////////////
    //    PRIVATE VARIABLE       //
    ///////////////////////////////
    var _that = null;
    var _stage = null;
    /**
     * @class app.view.mediators.ApplicationMediator
     * @extends puremvc.Mediator
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.view.mediators.ApplicationMediator',
            parent: puremvc.Mediator,
            constructor: function(stage) {
                puremvc.Mediator.prototype.constructor.call(this,
                    app.view.mediators.ApplicationMediator.NAME,
                    stage
                );
            }
        },

        // INSTANCE MEMBERS
        {
            /** @override */
            listNotificationInterests: function () {
                return [
                    ApplicationNotification.PREPARE
                ,	ApplicationNotification.INITIALIZED
                ,	ApplicationNotification.ADD_VIEW_COMPONENT
                ,	ApplicationNotification.REMOVE_VIEW_COMPONENT
                ];
            },

            /** @override */
            handleNotification: function (note) {
                //console.log("ApplicationMediator note:", note);
                var body = note.getBody();
                var name = note.getName();
                switch (name) {
                    case ApplicationNotification.PREPARE: 					break;
                    case ApplicationNotification.INITIALIZED: 	 			_stage.initialized();       break;

                    case ApplicationNotification.ADD_VIEW_COMPONENT: 		_stage.addChild(body); 		break;
                    case ApplicationNotification.REMOVE_VIEW_COMPONENT: 	_stage.removeChild(body); 	break;
                }
            },

            onRegister: function () {
                _that = this;
                _stage = this.viewComponent;
                cc.director.runScene( _stage );
                SetupListeners();
            },

            onRemove: function () {
                _that = null;
                _stage = null;
                this.setViewComponent(null);
            }
        },
        {
            NAME: 'ApplicationMediator'
        }
    );

    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////

    var SetupListeners = function() {
        //document.addEventListener("pause",         Handle_OnPause,       false);
        //document.addEventListener("resume",        Handle_OnResume,      false);
        document.addEventListener("backbutton",    Handle_OnBackButton,  false);
        //document.addEventListener("unload",        Handle_OnUnload,      false);
        //document.addEventListener("online",        Handle_OnOnline,      false);
        //document.addEventListener("offline",       Handle_OnOffline,     false);
        //document.addEventListener("keypress",      Handle_OnKeyPressed,  false);
        //document.addEventListener('touchleave',    Handle_TouchLeave,    false);
    };

    function Handle_TouchLeave(e) {
        console.log("> TouchLeave", e);
    }

    function Handle_OnKeyPressed(e) {
        if (!e) e = window.event;
        var code = (e.keyCode) ? e.keyCode : e.which;
        return (code === 13 || code === 3) ? false : true;
    }

    function Handle_OnOnline() {
        console.log("> ONLINE");
    }

    function Handle_OnOffline() {
        console.log("> OFFLINE");
    }

    function Handle_OnPause() {
        console.log("> PAUSE");
    }

    function Handle_OnResume() {
        console.log("> RESUME");
    }

    function Handle_OnUnload() {
        console.log("> UNLOAD");
    }

    function Handle_OnBackButton() {
        console.log("> BACK");
        function exitAppPopup() {
            navigator.notification.confirm(
                'Exit from SlotMachine ' + device.name + '?'
                , function(button) {
                    if (button === 2) {
                        navigator.app.exitApp();
                    }
                }
                , 'Exit'
                , 'No,Yes'
            );
            return false;
        }
        exitAppPopup();
    }
})();