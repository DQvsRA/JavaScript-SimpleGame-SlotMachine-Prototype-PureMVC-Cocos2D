/**
 * Created by dqvsra on 3/16/17.
 */
(function () {
    ///////////////////////////////
    //    PRIVATE VARIABLE       //
    ///////////////////////////////
    var _that = null;
    var _reels = null;

    /**
     * @class app.view.mediators.ReelsMediator
     * @extends puremvc.Mediator
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.view.mediators.ReelsMediator',
            parent: puremvc.Mediator,
            constructor: function(viewComponent) {
                puremvc.Mediator.prototype.constructor.call(this,
                    app.view.mediators.ReelsMediator.NAME,
                    viewComponent
                );
            }
        },

        // INSTANCE MEMBERS
        {
            /** @override */
            listNotificationInterests: function () {
                return [
                    ReelsNotification.SPIN
                ,	ReelsNotification.RESET
                ,	ReelsNotification.SHUFFLE
                ];
            },

            /** @override */
            handleNotification: function (note) {
                //console.log("ApplicationMediator note:", note);
                const name = note.getName();
                switch (name) {
                    case ReelsNotification.SPIN:
                        trace("> ReelsMediator -> handleNotification : DO SPIN");
                        _reels.spin();
                        break;
                }
            },

            onRegister: function () {
                _that = this;
                _reels = this.viewComponent;
                cc.eventManager.addCustomListener(ReelsEvents.SPIN_COMPLETED, Handle_SpinFinished);
                this.sendNotification( ReelsCommands.SETUP_REELS, _reels );
                this.sendNotification( ApplicationNotification.ADD_VIEW_COMPONENT, _reels );
            },

            onRemove: function () {
                _reels = null;
                this.setViewComponent(null);
            }
        },

        {
            NAME: 'ReelsMediator'
        }
    );

    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
    function Handle_SpinFinished() {
        _that.sendNotification( FooterNotification.UNLOCK );
    }
})();