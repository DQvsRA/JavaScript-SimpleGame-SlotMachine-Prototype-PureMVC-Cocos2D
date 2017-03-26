/**
 * Created by dqvsra on 3/26/17.
 */
/**
 * Created by dqvsra on 3/25/17.
 */
(function() {
    /**
     * @class app.controller.commands.game.StartGameCommand
     * @extends puremvc.SimpleCommand
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.controller.commands.game.StartGameCommand',
            parent: puremvc.SimpleCommand
        },

        // INSTANCE MEMBERS
        {
            execute: function (note) {
                console.log("> \t\t\t| Game Starts Command ");
                const gameProxy = this.facade.retrieveProxy(app.model.proxy.GameProxy.NAME);

                gameProxy.startGame();

                this.sendNotification( FooterNotification.LOCK );
                this.sendNotification( ReelsNotification.SPIN );
            }
        }
    );
    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
})();


