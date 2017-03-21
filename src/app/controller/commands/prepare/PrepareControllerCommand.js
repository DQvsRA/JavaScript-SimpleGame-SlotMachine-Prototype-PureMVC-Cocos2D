/**
 * Created by dqvsra on 3/16/17.
 */
/**
 * @class app.controller.commands.prepare.PrepareControllerCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define
(
    // CLASS INFO
    {
        name: 'app.controller.commands.prepare.PrepareControllerCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note)
        {
            console.log("> PureMVC -> Startup - Prepare: Controller");

            var commands = app.controller.commands;
            this.facade.registerCommand(
                ReelsCommands.SETUP_REELS,
                commands.reels.SetupReelsCommand );
        }
    }
);