/**
 * Created by dqvsra on 3/16/17.
 */
/**
 * @class app.controller.commands.prepare.PrepareModelCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define
(
    // CLASS INFO
    {
        name: 'app.controller.commands.prepare.PrepareModelCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note)
        {
            console.log("> PureMVC -> Startup - Prepare: Model");
            this.facade.registerProxy( new app.model.proxy.ApplicationProxy() );
            this.facade.registerProxy( new app.model.proxy.UserProxy() );
            this.facade.registerProxy( new app.model.proxy.GameProxy() );
        }
    }
);