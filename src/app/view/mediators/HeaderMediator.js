/**
 * Created by dqvsra on 3/16/17.
 */
(function () {
    ///////////////////////////////
    //    PRIVATE VARIABLE       //
    ///////////////////////////////
    var _header = null;
    /**
     * @class app.view.mediators.HeaderMediator
     * @extends puremvc.Mediator
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.view.mediators.HeaderMediator',
            parent: puremvc.Mediator,
            constructor: function(viewComponent) {
                puremvc.Mediator.prototype.constructor.call(this,
                    app.view.mediators.HeaderMediator.NAME,
                    viewComponent
                );
            }
        },

        // INSTANCE MEMBERS
        {
            /** @override */
            listNotificationInterests: function () {
                console.log("> \t\t\t| HeaderMediator > Register Notifications")
                return [
                    HeaderNotification.SET_SCORE
                ,	HeaderNotification.SET_GAMES
                ,	HeaderNotification.ADD_GAMES
                ];
            },

            /** @override */
            handleNotification: function (note) {
                var name = note.getName();
                console.log("> HeaderMediator -> Notification: ", note);
                switch (name) {
                    case HeaderNotification.SET_SCORE: 				_header.setScore( note.getBody() ); 		break;
                    case HeaderNotification.SET_GAMES: 		        _header.setGames( note.getBody() ); 	break;
                    case HeaderNotification.ADD_GAMES: 		        _header.setGames( note.getBody() ); 	break;
                    // case HeaderNotification.ENABLE_ORDER_BUTTON: 	_header.orderButton.enabled = true; 				break;
                    // case HeaderNotification.DISABLE_ORDER_BUTTON: 	_header.orderButton.enabled = false; 			break;
                }
            },

            onRegister: function () {
                _header = this.viewComponent;
                this.sendNotification( ApplicationNotification.ADD_VIEW_COMPONENT, _header );
            },

            onRemove: function () {
                this.setViewComponent(null);
            }
        },

        {
            NAME: 'HeaderMediator'
        }
    );

    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////

})();