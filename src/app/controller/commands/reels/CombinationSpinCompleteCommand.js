/**
 * Created by dqvsra on 3/26/17.
 */
(function() {
    /**
     * @class app.controller.commands.reels.CombinationSpinCompleteCommand
     * @extends puremvc.SimpleCommand
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.controller.commands.reels.CombinationSpinCompleteCommand',
            parent: puremvc.SimpleCommand
        },

        // INSTANCE MEMBERS
        {
            execute: function (note) {
                const gameProxy = this.facade.retrieveProxy(app.model.proxy.GameProxy.NAME);
                trace("> CombinationSpinCompleteCommand :");
                gameProxy.reelSpinFinished();
                if(gameProxy.isAllReelsFinished()) {
                    this.sendNotification( GameCommands.COMPLETE );
                }
            }
        }
    );
    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
})();


