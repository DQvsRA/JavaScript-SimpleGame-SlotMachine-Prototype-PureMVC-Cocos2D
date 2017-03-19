/**
 * Created by dqvsra on 3/16/17.
 */
(function () {
    ///////////////////////////////
    //    PRIVATE VARIABLE       //
    ///////////////////////////////
    var _that = null;
    var _slots = null;

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
                var body = note.getBody();
                var type = note.getType();
                var name = note.getName();
                switch (name) {
                    case ReelsNotification.SPIN:
                        trace("> ReelsMediator -> handleNotification : DO SPIN");
                        setTimeout(function () {
                            _that.sendNotification( FooterNotification.UNLOCK );
                        }, 2000);
                        break;
                }
            },

            onRegister: function () {
                _that = this;
                _slots = this.viewComponent;
                this.sendNotification( ApplicationNotification.ADD_VIEW_COMPONENT, _slots );
            },

            onRemove: function () {
                _slots = null;
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

})();