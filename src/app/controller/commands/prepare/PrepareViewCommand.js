/**
 * Created by dqvsra on 3/16/17.
 */
/**
 * @class app.controller.commands.prepare.PrepareViewCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define
(
    // CLASS INFO
    {
        name: 'app.controller.commands.prepare.PrepareViewCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE TRAITS
    {
        /** @override */
        execute: function (note)
        {
            var mediators = app.view.mediators;
            console.log("> PureMVC -> Startup - Prepare: View");
            var stage = note.getBody();
            var header = new Header();

            this.facade.registerMediator( new mediators.ApplicationMediator(stage) );
            this.facade.registerMediator( new mediators.HeaderMediator(header) );
        }
    }
);