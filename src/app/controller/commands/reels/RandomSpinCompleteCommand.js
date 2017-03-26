/**
 * Created by dqvsra on 3/26/17.
 */
(function() {
    /**
     * @class app.controller.commands.reels.RandomSpinCompleteCommand
     * @extends puremvc.SimpleCommand
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.controller.commands.reels.RandomSpinCompleteCommand',
            parent: puremvc.SimpleCommand
        },

        // INSTANCE MEMBERS
        {
            execute: function (note) {
                const reelIndex = note.getBody();
                const combProxy = this.facade.retrieveProxy(app.model.proxy.CombinationsProxy.NAME);
                trace("> RandomSpinCompleteCommand :", reelIndex);
                const combinationForReel = combProxy.getCombinationForReel(reelIndex);
                this.sendNotification( ReelsNotification.SPIN_REEL_TO_COMBINATION, combinationForReel, reelIndex);
            }
        }
    );
    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
})();


