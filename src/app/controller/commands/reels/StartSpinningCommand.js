/**
 * Created by dqvsra on 3/26/17.
 */
(function() {
    /**
     * @class app.controller.commands.reels.StartSpinningCommand
     * @extends puremvc.SimpleCommand
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.controller.commands.reels.StartSpinningCommand',
            parent: puremvc.SimpleCommand
        },

        // INSTANCE MEMBERS
        {
            execute: function (note) {
                console.log("> \t\t\t| Start Spinning Command ");
                const gameProxy = this.facade.retrieveProxy(app.model.proxy.GameProxy.NAME);
                const reels = note.getBody();
                const toCombination = Boolean(note.getType());

                if(toCombination) {
                    const combinationProxy = this.facade.retrieveProxy(app.model.proxy.CombinationsProxy.NAME);
                    // reels.spinToCombinationWithRandom(
                    reels.spinWithFinalReplacement(
                        gameProxy.spinTime(),
                        gameProxy.spinTimeSpread(),
                        combinationProxy.getCombinations()
                    )
                } else {
                    reels.spin(gameProxy.spinTime(), gameProxy.spinTimeSpread());
                }
            }
        }
    );
    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
})();


