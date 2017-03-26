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
            var proxies = app.model.proxy;
            console.log("> PureMVC -> Startup - Prepare: Model");
            this.facade.registerProxy( new proxies.ApplicationProxy() );
            this.facade.registerProxy( new proxies.CombinationsProxy() );
            this.facade.registerProxy( new proxies.GameProxy() );
            this.facade.registerProxy( new proxies.UserProxy() );
        }
    }
);