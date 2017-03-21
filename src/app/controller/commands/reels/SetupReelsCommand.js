/**
 * Created by dqvsra on 3/21/17.
 */
(function() {
    /**
     * @class app.controller.commands.reels.SetupReelsCommand
     * @extends puremvc.SimpleCommand
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.controller.commands.reels.SetupReelsCommand',
            parent: puremvc.SimpleCommand
        },

        // INSTANCE MEMBERS
        {
            execute: function (note) {
                console.log("> \t\t\t| Setup Reels Command ");
                const gameProxy = this.facade.retrieveProxy(app.model.proxy.GameProxy.NAME);

                const reels = note.getBody();
                reels.setup(gameProxy.reelsCount(), gameProxy.itemsCount());
            }
        }
    );
    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
})();

