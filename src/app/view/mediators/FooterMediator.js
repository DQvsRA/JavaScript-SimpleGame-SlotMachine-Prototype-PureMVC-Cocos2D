/**
 * Created by dqvsra on 3/19/17.
 */
(function () {
    ///////////////////////////////
    //    PRIVATE VARIABLE       //
    ///////////////////////////////
    var _that = null;
    var _footer = null;

    /**
     * @class app.view.mediators.FooterMediator
     * @extends puremvc.Mediator
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.view.mediators.FooterMediator',
            parent: puremvc.Mediator,
            constructor: function(viewComponent) {
                puremvc.Mediator.prototype.constructor.call(this,
                    app.view.mediators.FooterMediator.NAME,
                    viewComponent
                );
            }
        },

        // INSTANCE MEMBERS
        {
            /** @override */
            listNotificationInterests: function () {
                console.log("> \t\t\t| FooterMediator > Register Notifications")
                return [
                    FooterNotification.UNLOCK
                ];
            },

            /** @override */
            handleNotification: function (note) {
                var name = note.getName();
                console.log("> FooterMediator -> Notification: ", note);
                switch (name) {
                    case FooterNotification.UNLOCK: _footer.unlock(); break;
                }
            },

            onRegister: function () {
                _that = this;
                _footer = this.viewComponent;
                cc.eventManager.addCustomListener(FooterEvents.SPIN_BUTTON_TOUCHED, Handle_SpinButton_Touched);
                this.sendNotification( ApplicationNotification.ADD_VIEW_COMPONENT, _footer );
            },

            onRemove: function () {
                this.setViewComponent(null);
            }
        },

        {
            NAME: 'FooterMediator'
        }
    );

    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////

    function Handle_SpinButton_Touched(e) {
        trace("> FooterMediator -> Handle spin button");
        _footer.lock();
        _that.sendNotification( ReelsNotification.SPIN );
    }

})();
