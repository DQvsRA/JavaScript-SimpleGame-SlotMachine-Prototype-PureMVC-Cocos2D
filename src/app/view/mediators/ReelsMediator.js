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
                ,	ReelsNotification.SPIN_REEL_TO_COMBINATION
                ,	ReelsNotification.SPIN_TO_COMBINATION
                ];
            },

            /** @override */
            handleNotification: function (note) {
                //console.log("ApplicationMediator note:", note);
                const name = note.getName();
                switch (name) {
                    case ReelsNotification.SPIN_REEL_TO_COMBINATION: _reels.spinReelToCombination(note.getBody(), parseInt(note.getType())); break;
                    case ReelsNotification.SPIN_TO_COMBINATION: this.sendNotification( ReelsCommands.START_SPINNING, _reels, true ); break;
                    case ReelsNotification.SPIN: this.sendNotification( ReelsCommands.START_SPINNING, _reels ); break;
                }
            },

            onRegister: function () {
                _that = this;
                _reels = this.viewComponent;
                SetupListeners();
                this.sendNotification( ReelsCommands.SETUP_REELS, _reels );
                this.sendNotification( ApplicationNotification.ADD_VIEW_COMPONENT, _reels );
            },

            onRemove: function () {
                _reels = null;
                _that = null;
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
    function SetupListeners() {
        const m = cc.eventManager;
        m.addCustomListener(ReelsEvents.RANDOM_SPIN_COMPLETED,        Handle_RandomSpinComplete );
        m.addCustomListener(ReelsEvents.COMBINATION_SPIN_COMPLETED,   Handle_CombinationSpinComplete );
    }

    function Handle_CombinationSpinComplete() {
        _that.sendNotification( ReelsCommands.COMBINATION_SPIN_COMPLETE );
    }

    function Handle_RandomSpinComplete(e) {
        _that.sendNotification( ReelsCommands.RANDOM_SPIN_COMPLETE, e.getUserData() );
    }
})();