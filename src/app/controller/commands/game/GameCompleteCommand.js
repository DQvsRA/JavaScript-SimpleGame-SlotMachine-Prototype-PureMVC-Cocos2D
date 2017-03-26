/**
 * Created by dqvsra on 3/25/17.
 */
(function() {
    /**
     * @class app.controller.commands.game.GameCompleteCommand
     * @extends puremvc.SimpleCommand
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.controller.commands.game.GameCompleteCommand',
            parent: puremvc.SimpleCommand
        },

        // INSTANCE MEMBERS
        {
            execute: function (note) {
                console.log("> \t\t\t| Game Complete Command ");
                const gameProxy = this.facade.retrieveProxy(app.model.proxy.GameProxy.NAME);

                gameProxy.endGame();

                this.sendNotification( HeaderNotification.SET_GAMES, gameProxy.getGamesPlayed() );
                this.sendNotification( FooterNotification.UNLOCK );
            }
        }
    );
    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
})();

