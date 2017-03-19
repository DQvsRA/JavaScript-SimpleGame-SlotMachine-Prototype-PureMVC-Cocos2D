/**
 * Created by dqvsra on 3/16/17.
 */
(function() {
    /**
     * @class app.controller.commands.ReadyCommand
     * @extends puremvc.SimpleCommand
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.controller.commands.ReadyCommand',
            parent: puremvc.SimpleCommand
        },

        // INSTANCE MEMBERS
        {
            execute: function () {
                console.log("> PureMVC -> Startup - READY!");

                this.facade.removeCommand( ApplicationCommands.STARTUP );
                this.facade.removeCommand( ApplicationCommands.READY );

                this.sendNotification( HeaderNotification.SET_SCORE, Math.floor(Math.random()*1000) );
                this.sendNotification( HeaderNotification.SET_GAMES, Math.floor(Math.random()*1000) );
            }
        }
    );
    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
})();
