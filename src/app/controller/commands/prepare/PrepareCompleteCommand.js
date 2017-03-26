/**
 * Created by dqvsra on 3/19/17.
 */
/**
 * @class app.controller.commands.prepare.PrepareCompleteCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define
(
    // CLASS INFO
    {
        name: 'app.controller.commands.prepare.PrepareCompleteCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note)
        {
            console.log("> PureMVC -> Startup - Prepare: Complete");

            var userProxy = this.facade.retrieveProxy(app.model.proxy.UserProxy.NAME); /* Get UserProxy to get default user and set current user if it's already setted */
            var gameProxy = this.facade.retrieveProxy(app.model.proxy.GameProxy.NAME); /* Get UserProxy to get default user and set current user if it's already setted */
            // var user = userProxy.getUser();

            // trace("\tgameProxy:", gameProxy.name);
            // trace("\t\t.reelsCount =", gameProxy.reelsCount());
            // trace("\t\t.itemsCount =", gameProxy.itemsCount());
            // trace("\t\t.reelSpeed =", gameProxy.reelSpeed());
            // trace("\t\t.spinTime =", gameProxy.spinTime());
            // trace("\t\t.spinTimeSpread =", gameProxy.spinTimeSpread());
            // trace("\t\t.reelItemsNames =", gameProxy.reelItemsNames());

            this.sendNotification( HeaderNotification.SET_SCORE, Math.floor(Math.random()*1000) );
            this.sendNotification( HeaderNotification.SET_GAMES, gameProxy.getGamesPlayed() );

            this.sendNotification( ApplicationCommands.READY );
            this.sendNotification( ApplicationNotification.INITIALIZED );
        }
    }
);
