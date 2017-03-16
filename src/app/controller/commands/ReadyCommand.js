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
            execute: function (note) {
                console.log("> PureMVC -> Startup - READY!");

                var userProxy = this.facade.retrieveProxy(app.model.proxy.UserProxy.NAME); /* Get UserProxy to get default user and set current user if it's already setted */
                // var user = userProxy.getUser();

                var stage = note.getBody();
                var layer = new HelloWorldsLayer();
                stage.onEnter = function () {
                    this.addChild(layer);
                };

                this.sendNotification( HeaderNotification.SET_SCORE, Math.floor(Math.random()*1000) );
                this.sendNotification( HeaderNotification.SET_GAMES, Math.floor(Math.random()*1000) );
            }
        }
    );
    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
})();
